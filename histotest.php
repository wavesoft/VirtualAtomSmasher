<!DOCTYPE html>
<html>
	<head>
		<title>Histogram Test</title>
		<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
		<script type="text/javascript" src="js/jcanvas.min.js"></script>
		<script type="text/javascript" src="js/d3.js"></script>
		<script type="text/javascript">

		var dataURL = "runjob.php", hist, datalist;

		function updateHistogram( v ) {

			// Start spinner
			$("#loading-icon").show();
			$("#rerun").prop("disabled", true);

			// Perform the request
			$.ajax({
			  type: "GET",
			  url: dataURL,
			  data: { v: v }
			}).done(function( data ) {

				$("#loading-icon").hide();
				$("#rerun").prop("disabled", false);

				console.log(data);
				hist.update(data);
				datalist.add( v, data );


			}).fail(function(msg) {

				$("#loading-icon").hide();
				$("#rerun").prop("disabled", false);
				console.error(msg);

			});

		}

		/**
		 * History data list
		 */
		var DataList = function( container ) {

			this.datasets = { };
			this.container = $(container);

		}

		DataList.prototype.add = function( value, data ) {

			// Skip multiple history entries
			if (this.datasets[value] != undefined) return;
			this.datasets[value] = data;

			// Chi2
			var chi2 = data.chi2,
				val = parseFloat(value),
				self = this;

			// Calculate color for the chi2
			var color = '#C00';
			if (chi2 < 1) {
				color = '#093';
			} else if (chi2 < 2) {
				color = '#F93';
			}

			// Add item
			var a = $('<a href="#"><span style="background: ' + color + '">' + parseFloat(chi2).toFixed(5) + '</span> v=' + parseFloat(value).toFixed(10) + '</a>');
			a.click(function() {
				$(self).trigger( 'update', [data, val] );
			});

			// Push it on the container
			this.container.append( a );

		}

		/**
		 * Histogram
		 */
		var Histogram = function( container ) {

			// A formatter for counts.
			var formatCount = d3.format(",.0f");

			// Histogram margins
			var margin = {top: 30, right: 30, bottom: 30, left: 60},
			    width = this.width = $(container).width() - margin.left - margin.right,
			    height = this.height = $(container).height() - margin.top - margin.bottom;

			// X-Scale
			var x = this.x = d3.scale.linear()
			    .range([0, width]);

			// Y-Scale
			var y = this.y = d3.scale.log()
			    .range([height, 0]);

			// X-Axis
			var xAxis = this.xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom");

			// Y-Axis
			var yAxis = this.yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left");

			// Line plot that uses histogram data
			var line = this.line = d3.svg.line()
			    .x(function(d) { return x(d[1]); })
			    .y(function(d) { return y(d[3]); })
			    .defined(function(d) { return d[3] != 0; });

			// Area plot that shows the error band
			var area = this.area = d3.svg.area()
			    .x(function(d) { return x(d[1]); })
			    .y0(function(d) { return y(d[3] - d[4]); })
			    .y1(function(d) { return y(d[3] + d[5]); })
			    .defined(function(d) { return d[3] != 0; });

			// The plot container
			var svg = this.svg = d3.select(container).append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


			this.gXAxis = svg.append("g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + height + ")")
			      .call(xAxis);

			this.gXAxisTxt = this.gXAxis.append("text")
			      .attr("x", width)
			      .attr("dy", "30px")
			      .style("text-anchor", "end");

			this.gYAxis = svg.append("g")
			      .attr("class", "y axis")
			      .call(yAxis);

			this.gYAxisTxt = this.gYAxis.append("text")
			      .attr("transform", "rotate(-90)")
			      .attr("y", 6)
			      .attr("dy", "-50px")
			      .style("text-anchor", "end");

			  // Add error band for the computed data
			var initialData = [ ];
			for (var i=0; i<21; i++) {
				initialData.push([0,0,0,0,0,0]);
			}

			// Add error band
			this.gErrbandDat = svg.append("path")
				.data( initialData )
			    .attr("class", "errband-dat");

			// Add computed data
			this.gLineDat = svg.append("path")
		    	.data( initialData )
		    	.attr("class", "line-dat");

			// Add reference data
			this.gLineRef = svg.append("path")
			    .data( initialData )
			    .attr("class", "line-ref");

			this.initialized = false;
		}

		Histogram.prototype.update = function(data) {

			// Update domain bounds from data
			this.x.domain( data.bounds.x );
			this.xAxis.scale(this.x);
			this.y.domain( data.bounds.y );
			this.yAxis.scale(this.y);

			// Update axes
			this.gXAxisTxt.text( data.dat.plot.XLabel );
			this.gXAxis.call(this.xAxis);
			this.gYAxisTxt.text(data.dat.plot.YLabel );
			this.gYAxis.call(this.yAxis);

			// Update data sets
			this.gErrbandDat.data( [data.dat.hist.bins] );
			this.gErrbandDat.transition().attr("d", this.area);

			this.gLineDat.data( [data.dat.hist.bins] );
			this.gLineDat.transition().attr("d", this.line);

			this.gLineRef.data( [data.ref.hist.bins] );
			this.gLineRef.transition().attr("d", this.line);

		}

		$(function(){

			// Make histogram
			hist = new Histogram( "#histogram" );

			// Create datalist history store
			datalist = new DataList("#history");
			$(datalist).on('update', function(e, data, value){
				hist.update( data );
				$("#v-value").prop( 'value', value );
			});

			// Hide loading icon
			$("#loading-icon").hide();

			// Bind events
			$("#rerun").click(function() {
				updateHistogram( $("#v-value").val() );
			});

		});

		</script>

		<style type="text/css">

			body {
			  font: 12px sans-serif;
			}

			.axis path,
			.axis line {
			  fill: none;
			  stroke: #000;
			  shape-rendering: crispEdges;
			}

			.axis path {
			  stroke-width: 2px;
			}

			.line-ref,
			.line-dat {
			  fill: none;
			  stroke-width: 1.5px;
			}

			.line-dat {
			  stroke: steelblue;
			}
			.line-ref {
			  stroke: gold;
			}

			.errband-dat {
			  fill: #9FB4EA;
			}

			div#histogram {
				width: 600px;
				height: 400px;
			}

			div#history {
				height: 400px;
				overflow-y: scroll;
				width: 200px;
				border: solid 1px #ddd;
			}

			div#history > a {
				display: block;
				padding: 4px;
				text-decoration: none;
			}
			div#history > a:hover {
				background: #D0D0E8;
			}

			div#history > a > span {
				padding: 2px;
				margin-right: 10px;
				display: inline-block;
				width: 50px;
				color: #fff;
				text-align: center;
			}

		</style>
	</head>
	<body>
		<h1>Histogram Test</h1>
		<p>TimeShower:alphaSvalue = <input type="text" id="v-value" value="0.1" /> <input id="rerun" type="submit" value="Re-Run" /> <img src="theme/img/loading.gif" id="loading-icon" /></p>
		<table>
			<tr>
				<td><div id="histogram"></div></td>
				<td><div id="history"></div></td>
			</tr>
		</table>

	</body>
</html>