
/**
 * 3D Viewport with renderer
 * 
 * A viewport is the basic setup of renderable 3D scene with camera and 
 * animation capabilitis. Most of the scene objects are stored here.
 *
 */
_NS_.Viewport = function(options) {
    var op = options || { };
    if (!op.container) {
        this.container = document.createElement('div');
		document.body.appendChild( this.container );
    } else {
        this.container = $(op.container);
    }
    
    this.fullscreen = op.fullscreen || false;
    this.bg = op.bg || 0x000000;
    this.stats = op.stats == undefined ? true : op.stats;
    this.autostop = op.autostop || true;
    this.autohover = op.autohover || true;
	this.animating = (op.animating == undefined) ? true : op.animating;
    
    // Setup variables
    var self=this;
	this.lastFrameTime = Date.now();
	
	// Setup renderer
    var w=$(this.container).width(), h=$(this.container).height();
    if (this.fullscreen) { w=$(window).width(); h=$(window).height(); };
    console.log(w,h);

	this.renderer = new THREE.WebGLRenderer( { antialias: true, clearColor: this.bg, clearAlpha: 1 } );
	$(this.container).append(this.renderer.domElement);
	
	// Setup scene
	this.scene = new THREE.Scene();
	
	// Setup camera
	this.camera = new THREE.PerspectiveCamera( 40, w/h, 0.1, 10000 );
	this.camera.position.set( 10, 0, 0);
	this.camera.lookAt(new THREE.Vector3(0,0,0));
	
	// Check if we should add stats
	if (this.stats) {
	    this.stats = new Stats();
	    $(this.container).append( this.stats.domElement );
		$(this.stats.domElement).css({
		    'position': 'absolute',
		    'top': 0, 'left': 0
		});
	}
	
	// Setup postprocessing composer
    this.composer = new THREE.EffectComposer( this.renderer );
    var r = new THREE.RenderPass( this.scene, this.camera );
    this.composer.addPass( r );
    this.renderPasses = [ ];
	
	// Initialize and bind on event callbacks
	this.resize();
	$(window).resize(function(){ self.resize() });
	
	// Keep a vector with the normalized mouse position
	this.mouse = new THREE.Vector2(0, 0);
	$(this.renderer.domElement).mousemove(function(event) {

        // Get the offset of the DOM element
        var parentOffset = $(self.renderer.domElement).offset(); 

        // Update mouse position
	    self.mouse.x = ( (event.pageX - parentOffset.left) / self.width ) * 2 - 1;
    	self.mouse.y = - ( (event.pageY - parentOffset.top) / self.height ) * 2 + 1;
    	
	});

	// Prepare projectors & ray tracers that are used to find a hovered object
	this.projector = new THREE.Projector();
	this.raycaster = new THREE.Raycaster();
	this.currentHover = false;
    
	// Start animation, unless otherwise told
	if (this.animating) this.animate();
	
	// Register autostop handlers
	$(window).blur(function() {
	    if (self.autostop) self.animating=false;
	});
	$(window).focus(function() {
	    if (self.autostop) {
	        self.animating=true;
	        self.animate();
        }
	});
	
};

/**
 * Add an extra render pass
 */
_NS_.Viewport.prototype.insertPass = function(pass, index) {
    this.renderPasses.splice( index, 0, pass );
    this.composer.insertPass(pass, index);
}

/**
 * Add an extra render pass
 */
_NS_.Viewport.prototype.addPass = function(pass) {
    this.renderPasses.push(pass);
    this.composer.addPass(pass);
}

/**
 * Get the fore-most object that is under the user's mouse
 */
_NS_.Viewport.prototype.getHoverObject = function() {
    
    // Calculate the source vector
	var vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 1 );
	this.projector.unprojectVector( vector, this.camera );

    // Cast ray
	this.raycaster.set( this.camera.position, vector.sub( this.camera.position ).normalize() );

    // Find intersections
	var intersects = this.raycaster.intersectObjects( this.scene.children, true );
    
    // Check for no intersections
    if (intersects.length == 0) return false;
    
    // Check if there is a hover redirection via the 'hoverTarget' property
    for (var i=0; i<intersects.length; i++) {
        if (intersects[i].object.hoverTarget !== undefined) return intersects[i].object.hoverTarget;
    }
    return intersects[0].object;
    
}

/**
 * Resize the viewport and camera
 */
_NS_.Viewport.prototype.resize = function() {
    var w=$(this.container).width(), h=$(this.container).height();
    if (this.fullscreen) { w=$(window).width(); h=$(window).height(); };
    console.log(w,h);
    this.width = w;
    this.height = h;
	this.renderer.setSize( w,h );
	this.composer.setSize( w,h );
	this.camera.aspect = w/h;
	this.camera.updateProjectionMatrix();
};

/**
 * Overridable function to render the content
 */
_NS_.Viewport.prototype.render = function( delta ) {
    
    if (this.renderPasses.length == 0) {
        this.renderer.render( this.scene, this.camera );
    } else {
        this.composer.render( delta );
    }
};

/**
 * Self-repeating function to initiate the animation sequence
 */
_NS_.Viewport.prototype.animate = function() {
    var self=this,
        time = Date.now();
    
    // Stop when animation stops
    if (!this.animating) return;
    
    // Continue animation (Before any fail-prone code)
    requestAnimationFrame( function(){ self.animate(); });

    // Calculate updates on hovered objects
    if (this.autohover) {
        var currentHover = this.getHoverObject();
        if (this.currentHover !== currentHover) {
            if (this.currentHover) $(this).trigger('hoverexit', this.currentHover);
            $(this).trigger('hoverenter', currentHover);
            this.currentHover = currentHover;
        }
    }
    
    // Calculate time delta in milliseconds
    this.render( time - this.lastFrameTime );
    this.lastFrameTime = time;

    // Update statistics
    if (this.stats) this.stats.update();
};

