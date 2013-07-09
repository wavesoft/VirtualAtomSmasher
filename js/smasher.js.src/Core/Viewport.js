
_NS_.Viewport = function(options) {
    var op = options || { };
    if (!op.container) {
        op.container = document.createElement('div');
		document.body.appendChild( op.container );
    }
    if (op.bg==undefined) op.bg = 0x000000;
    if (op.stats==undefined) op.stats = true;
    if (op.autostop==undefined) op.autostop = true;
    
    // Setup variables
    var self=this;
	this.op = op;
	this.container = op.container;
	this.animating = (op.animating == undefined) ? true : op.animating;
	
	// Setup renderer
    var w=$(this.container).width(), h=$(this.container).height();
	this.renderer = new THREE.WebGLRenderer( { antialias: true, clearColor: op.bg, clearAlpha: 1 } );
	this.container.appendChild(this.renderer.domElement);
	
	// Setup scene
	this.scene = new THREE.Scene();
	
	// Setup camera
	this.camera = new THREE.PerspectiveCamera( 50, w/h, 0.1, 10000 );
	this.camera.position.set( 10, 0, 0);
	this.camera.lookAt(new THREE.Vector3(0,0,0));
	
	// Check if we should add stats
	if (op.stats) {
	    this.stats = new Stats();
		this.container.appendChild( this.stats.domElement );
		$(this.stats.domElement).css({
		    'position': 'absolute',
		    'top': 0, 'left': 0
		});
	}
	
	// Initialize and bind on callbacks
	this.resize();
	$(window).resize(function(){ self.resize() });
	
	// Start animation, unless otherwise told
	if (this.animating) this.animate();
	
	// Register autostop handlers
	$(window).blur(function() {
	    if (op.autostop) self.animating=false;
	});
	$(window).focus(function() {
	    if (op.autostop) {
	        self.animating=true;
	        self.animate();
        }
	});
	
};

_NS_.Viewport.prototype.resize = function() {
    var w=$(this.container).width(), h=$(this.container).height();
	this.renderer.setSize( w,h );
	this.camera.aspect = w/h;
	this.camera.updateProjectionMatrix();
};

_NS_.Viewport.prototype.render = function() {
    this.renderer.render( this.scene, this.camera );
};

_NS_.Viewport.prototype.animate = function() {
    var self=this;
    if (!this.animating) return;
    requestAnimationFrame( function(){ self.animate(); });
    this.render();
    if (this.stats) this.stats.update();
};

