
_NS_.LHCWindow = function ( options ) {
    var self=this;
    var op = options || { };
    _NS_.Viewport.call(this, op);
    
    // Setup lighting
    var l = new THREE.DirectionalLight( 0xffffff );
    l.position.set(400, -400, 400);
    l.lookAt(new THREE.Vector3(0,0,0));
    this.scene.add(l);
    
    // Add ambient light for increasing the luminosity
    var la = new THREE.AmbientLight( 0x111111 );
    this.scene.add(la);

    // Setup camera
    this.camera.position.set( 0, -200, 100);
    this.camera.lookAt(new THREE.Vector3(0,-60,0));
    
    // Add the LHC ring
    this.lhc = new _NS_.LHCRing();
    this.scene.add(this.lhc);

    this.lhc_mirror = new _NS_.LHCRing();
    this.lhc_mirror.position.z = -15;
    this.scene.add(this.lhc_mirror);
    
    var plane = new THREE.Mesh( new THREE.PlaneGeometry( 10000, 10000 ), new THREE.MeshBasicMaterial( { color: 0x00, opacity: 0.5, transparent: true } ) );
    plane.position.z = -10;
	this.scene.add( plane );
	this.renderer.autoClear = false;
	
    // Set environment if defined
    if (op.env !== undefined) this.setEnvironment(op.env);

    // =================================== //
    //           GLOWING OBJECTS           //
    // =================================== //
    
    // Prepare glow scene
    this.glowScene = new THREE.Scene();
    this.glowScene.add( this.lhc.glowObject );	
    //this.glowScene.add( this.lhc_mirror.glowObject );	

    // Prepare a secondary composer
    this.glowComposer = new THREE.ComposerPass( this.renderer, this.width, this.height );

    // Prepare the blur render passes
	this.glowHShaderPass = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	this.glowVShaderPass = new THREE.ShaderPass( THREE.VerticalBlurShader );
	
	// Stack the required render passes
	this.glowComposer.addPass( new THREE.RenderPass( this.glowScene, this.camera, undefined, new THREE.Color(0x000000) ) );
	this.glowComposer.addPass( this.glowHShaderPass );
	this.glowComposer.addPass( this.glowVShaderPass );
	    
	// Add the composer passes to the current stack
	this.addPass( this.glowComposer );
	
	// Run resize again so it updates the shader stack
	this.resize();
    
    // Start animation thread
    this.animate();
    
};

_NS_.LHCWindow.prototype = Object.create( _NS_.Viewport.prototype );

/**
 * Update the environment map materials
 */
_NS_.LHCWindow.prototype.updateEnvmap = function() {
    if ((this.model != null) && (this.envMap != null)) {
    	for (var i=0; i<this.model.materials.length; i++) {
    	    this.model.materials[i].envMap = this.envMap;
    	    this.model.materials[i].needsUpdate = true;
    	}
    }
}

_NS_.LHCWindow.prototype.resize = function(w,h) {
    _NS_.Viewport.prototype.resize.call(this, w, h);
    
    // Update blur uniforms
    if (this.glowVShaderPass !== undefined) {
    	this.glowVShaderPass.uniforms[ "v" ].value = 2 / this.height;
        this.glowHShaderPass.uniforms[ "h" ].value = 2 / this.width;
    }
}

/**
 * Change the environment map
 */
_NS_.LHCWindow.prototype.setEnvironment = function(path, fmt) {
 
	var format = fmt || '.png';
	var urls = [
		path + 'px' + format, path + 'nx' + format,
		path + 'py' + format, path + 'ny' + format,
		path + 'pz' + format, path + 'nz' + format
	];
	this.envMap = THREE.ImageUtils.loadTextureCube( urls );
	this.envMap.format = THREE.RGBFormat;
	this.updateEnvmap();
};

/**
 * Render & Update objects
 */
_NS_.LHCWindow.prototype.render = function( delta ) {
    if (this.controller) this.controller.update();
    if (this.o) { this.o.rotation.z += 0.01; }
    if (this.cmsh) { this.cmsh.rotation.z += 0.01; }
    if (this.lhc) { 
        this.lhc.rotation.z += delta / 5000; 
        this.lhc_mirror.rotation.z += delta / 5000; 
        this.lhc.update(delta); 
        this.lhc_mirror.update(delta); 
    }
    
    _NS_.Viewport.prototype.render.call(this, delta);
};

