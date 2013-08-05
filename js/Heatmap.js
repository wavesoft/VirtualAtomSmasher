(function() {

	/**
	 * Color scales
	 */
	var Scale = {

		GreenRedScale: function(v) {

			// Color
			var g = 0xff, r = 0xff;
			if (v < 0.5) 
				r = Number( v*0xff/0.5 );
			if (v > 0.5)
				g = 0xff - Number((v-0.5)*0xff/0.5 );

			return [ r & 0xff , g & 0xff , 0 ];

		},

		FireScale: function( v ) {

			var r = 0xff, g = 0x00, b = 0x00;
			if (v < 0.333) {
				r = (0xff * v) / 0.333;
				g = 0x00;
				b = 0x00;
			} else if (v < 0.666) {
				r = 0xff;
				g = (0xff * (v-0.333)) / 0.333;
				b = 0x00;
			} else {
				r = 0xff;
				g = 0xff;
				b = (0xff * (v-0.666)) / 0.333;
			}

			return [r,g,b];

		},

		GreenScale: function( v ) {

			var r = 0xff, g = 0x00, b = 0x00;
			if (v < 0.333) {
				g = (0xff * v) / 0.333;
				r = 0x00;
				b = 0x00;
			} else if (v < 0.666) {
				g = 0xff;
				r = (0xff * (v-0.333)) / 0.333;
				b = 0x00;
			} else {
				g = 0xff;
				r = 0xff;
				b = (0xff * (v-0.666)) / 0.333;
			}

			return [r,g,b];

		}

	};

	/**
	 * Interpolator functions
	 */
	var Interpolators = {

		/**
		 * IDW Works nicely on scattered data
		 */
		InverseDistanceWeighting: function( p ) {

			// Setup variables
			var data = [],
				power = p || 1,
				boundsX = false,
				boundsY = false;

			// Shepard's interpolation weight function between two points
			function __weight(a, b) {
				var w = Math.sqrt( Math.pow((b[0]-a[0]),2) + Math.pow((b[1]-a[1]),2) );
				return 1.0 / Math.pow(w, power);
			}

			// Check if the given point is in bounds
			function __inBounds(x,y) {
				if (boundsX !== false)
					if ((x<boundsX[0]) || (x>boundsX[1])) return false;
				if (boundsY !== false) 
					if ((y<boundsY[0]) || (y>boundsY[1])) return false;
				return true;
			}

			// Set the new data to the IDW interpolator
			this.setData = function(dat) {
				data = dat;
			}

			// Set the bounds of the current window in order to 
			// optimize the performance
			this.setBounds = function(x,y) {
				this.boundsX = x;
				this.boundsY = yl
			}

			// Interpolate at the given point
			this.at = function(x,y) {
				var idx = [x,y];

				// Calculate the Σ[j=0->N] of Wj(X)
				var total = 0.0;
				for (var i=0; i<data.length; i++) {
					total += __weight( data[i], idx );
				}

				// Calculate interpolation to neighbors
				var ans = 0.0;
				for (var i=0; i<data.length; i++) {
					var w = __weight( data[i], idx );
					if (w < 0.001) {
						return data[i][2];
					} else {
						ans += w * data[i][2] / total;
					}
				}

				// Return value
				return ans;

			};

		}

	};

	/**
	 * Heat map javascript object
	 */
	var Heatmap = window.Heatmap = function( host, config ) {
		var cfg 			= config || { };

		this.host 			= $(host);
		this.width 			= cfg.width || $(host).width();
		this.height 		= cfg.height || $(host).height();
		this.shadow			= (cfg.shadow == undefined) ? false : cfg.shadow;

		this.canvas 		= document.createElement('canvas');
		this.canvas.width 	= this.width;
		this.canvas.height 	= this.height;

		this.host.append(this.canvas);
		this.context2d 		= this.canvas.getContext('2d');
		this.pixelData 		= this.context2d.createImageData(
								this.width, this.height );

		this.scale 			= Scale.GreenRedScale;
		this.scaleBounds	= [0, 1];

		this.interpolator 	= new Interpolators.InverseDistanceWeighting(20);

		this.data 			= [];
		this.dataIndex		= {};
		this.bounds 		= [ 0, 1, 0, 1 ];
		
	};

	// Expose globals
	Heatmap.Scale = Scale;
	Heatmap.Interpolators = Interpolators;

	/**
	 * Resize the heatmap component
	 */
	Heatmap.prototype.resize = function( w,h ) {
		this.width = w || $(this.host).width();
		this.height = h || $(this.host).height();
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	/**
	 * Set data on the heatmap
	 * The data vaiable must be an array of arrays. Each array must have the following
	 * structure: [ varA, varB, value ]
	 */
	Heatmap.prototype.setData = function( data, bounds ) {
		this.data = data;
		this.dataIndex = {};
		for (var i=0; i<this.data.length; i++)
			this.dataIndex[ parseFloat(this.data[i][0]).toFixed(3) + ',' + parseFloat(this.data[i][1]).toFixed(3) ] = this.data[i][2];
		this.interpolator.setData( data );
	}

	/**
	 * Render the current screen
	 */
	Heatmap.prototype.update = function() {

		// Update pixels
		for (var y=0; y<this.height; y++) {
			for (var x=0; x<this.width; x++) {
				var index = (y * this.width + x) * 4;

				// Just clear to white if we don't have data
				if (!this.data || (this.data.length == 0)) {
					this.pixelData.data[ index ]     = 0xff;
					this.pixelData.data[ index + 1 ] = 0xff;
					this.pixelData.data[ index + 2 ] = 0xff;
					this.pixelData.data[ index + 3 ] = 0xff;
					continue;
				}

				// Setup variables
				var valx 	= (x * (this.bounds[1] - this.bounds[0]) / this.width)  + this.bounds[0],
				    valy 	= (y * (this.bounds[3] - this.bounds[2]) / this.height) + this.bounds[2],
				    a       = 0xff,
				    dat, datNorm, rgb;

				// Convert to alpha if the point is inerpolated
				if ((dat = this.dataIndex[ parseFloat(valx).toFixed(3) + ',' + parseFloat(valy).toFixed(3)]) == undefined) {
				    dat = this.interpolator.at( valx, valy );
					a = 0xff;
				}

				// Normaize data into scale & get scale color
			    datNorm = (dat - this.scaleBounds[0]) / (this.scaleBounds[1] - this.scaleBounds[0]);
			    if (datNorm < this.scaleBounds[0]) datNorm = this.scaleBounds[0];
			    if (datNorm > this.scaleBounds[1]) datNorm = this.scaleBounds[1];

			    // Calculate color
			    rgb  	= this.scale( datNorm );

				// Store pixel data
				this.pixelData.data[ index ]     = Math.max(0,Math.min(255, rgb[0]));
				this.pixelData.data[ index + 1 ] = Math.max(0,Math.min(255, rgb[1]));
				this.pixelData.data[ index + 2 ] = Math.max(0,Math.min(255, rgb[2]));
				this.pixelData.data[ index + 3 ] = a;
			}
		}

		// Draw pixels
		this.context2d.clearRect ( 0 , 0 , this.width , this.height );
		this.context2d.putImageData(this.pixelData, 0, 0);

		// Draw mask
		var cx = this.width/2, cy = this.height/2, o = 2, ow = 15, tw = 1, th = 6;

		// Vertical line
		this.context2d.strokeStyle = "#000000";
		this.context2d.lineWidth = 1;
		this.context2d.beginPath();

		this.context2d.moveTo(cx, cy+o);
		this.context2d.lineTo(cx, this.height);

		this.context2d.moveTo(cx, cy-o);
		this.context2d.lineTo(cx, 0);

		this.context2d.stroke();

		// Bottom triangle
		this.context2d.fillStyle = "#000000";
		this.context2d.fillRect( cx - tw, this.height-th, tw*2, th)
		this.context2d.fillRect( cx - tw, 0, tw*2, th)

		// Horizontal line
		this.context2d.strokeStyle = "rgba(0,0,0,0.25)";
		this.context2d.beginPath();
		this.context2d.moveTo(0, cy);
		this.context2d.lineTo(cx-o, cy);
		this.context2d.moveTo(cx+o, cy);
		this.context2d.lineTo(this.width, cy);
		this.context2d.stroke();

		// Grid
		this.context2d.strokeStyle = "rgba(0,0,0,0.15)";
		this.context2d.beginPath();
		var gridsz = 10, xofs = cx % gridsz, yofs = cy % gridsz;
		for (var x=xofs; x<this.width; x+=gridsz) {
			this.context2d.moveTo(x, 0);
			this.context2d.lineTo(x, this.height);
		}
		for (var y=yofs; y<this.height; y+=gridsz) {
			this.context2d.moveTo(0, y);
			this.context2d.lineTo(this.width, y);
		}
		this.context2d.stroke();

		// Corner shadow
		if (this.shadow) {
			this.context2d.strokeStyle = "rgba(0,0,0,0.3)";
			this.context2d.beginPath();
			this.context2d.moveTo(0, this.height);
			this.context2d.lineTo(0, 0);
			this.context2d.lineTo(this.width, 0);
			this.context2d.stroke();

			this.context2d.strokeStyle = "rgba(0,0,0,0.25)";
			this.context2d.beginPath();
			this.context2d.moveTo(1, this.height);
			this.context2d.lineTo(1, 1);
			this.context2d.lineTo(this.width, 1);
			this.context2d.stroke();

			this.context2d.strokeStyle = "rgba(0,0,0,0.2)";
			this.context2d.beginPath();
			this.context2d.moveTo(2, this.height);
			this.context2d.lineTo(2, 2);
			this.context2d.lineTo(this.width, 2);
			this.context2d.stroke();

			this.context2d.strokeStyle = "rgba(0,0,0,0.1)";
			this.context2d.beginPath();
			this.context2d.moveTo(3, this.height);
			this.context2d.lineTo(3, 3);
			this.context2d.lineTo(this.width, 3);
			this.context2d.stroke();
		}

	}

})();
