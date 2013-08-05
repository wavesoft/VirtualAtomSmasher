
_NS_.SmasherFrame = function ( options ) {
    var self=this;
    var op = options || { };
    _NS_.Viewport.call(this, op);
    
    // Setup lighting
    var l = new THREE.DirectionalLight( 0xffffff );
    l.position.set(400, -400, 400);
    l.lookAt(new THREE.Vector3(0,0,0));
    this.scene.add(l);

    var la = new THREE.AmbientLight( 0x111111 );
    this.scene.add(la);

    this.camera.position.set( 0, -200, 100);
    this.camera.lookAt(new THREE.Vector3(0,-60,0));


    // Add a spinning cube
    /*
    var i = 1, sz=4;
    var cb1 = new THREE.CylinderGeometry(0,i,sz, 20, 1, 1, false),
        cb2 = new THREE.CylinderGeometry(0,i,sz, 20, 1, 1, false);
    var mat = new THREE.MeshPhongMaterial({'color': 0x8A8AFF, 'wireframe': false, side: THREE.DoubleSide});

    var a1 = new THREE.Mesh( cb1, mat ); a1.doubleSided = true; a1.position.set(-sz/2,0,0); a1.rotation.z = -Math.PI/2;
    var a2 = new THREE.Mesh( cb2, mat ); a2.doubleSided = true; a2.position.set(sz/2,0,0);  a2.rotation.z = Math.PI/2;
    var o = new THREE.Object3D();         o.position.set(0,0,0);
    o.add(a1); o.add(a2);

    this.o = o;
    this.scene.add(o);

    var cg = new THREE.SphereGeometry(0.4, 10);
    var cm = new THREE.MeshPhongMaterial({color: 0xff0000});
    var cmsh = new THREE.Mesh(cg, cm);
    this.scene.add(cmsh);
    */
    
    // Add the LHC ring
    this.lhc = new _NS_.LHCRing();
    this.scene.add(this.lhc);
    
    // Set environment if defined
    if (op.env !== undefined) this.setEnvironment(op.env);
    
    $(this).on('hoverenter', function(e) {
        console.log(e);
        if (e instanceof _NS_.LHCDipole) {
            console.log("DA!");
            e.position.z = 5;
        }
    });
    $(this).on('hoverexit', function(e) {
        if (e instanceof _NS_.LHCDipole) {
            console.log("Done!");
            e.position.z = 0;
        }
    });
    
    // Prepare a scene for the blurred objects
    this.blurScene = new THREE.Scene();

    // Prepare a secondary composer
    this.blurComposer = new THREE.ComposerPass( this.renderer, this.width, this.height );

    // Prepare the blur render passes
	this.blurHShaderPass = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	this.blurVShaderPass = new THREE.ShaderPass( THREE.VerticalBlurShader );
	
	// Stack the required render passes
	this.blurComposer.addPass( new THREE.RenderPass( this.blurScene, this.camera, undefined, new THREE.Color(0x000000) ) );
	this.blurComposer.addPass( this.blurHShaderPass );
	this.blurComposer.addPass( this.blurVShaderPass );
	
	// Add the composer pass to the current stack
	this.addPass( this.blurComposer );
	
	// Run resize again so it updates the shader stack
	this.resize();
    
    // Start animation thread
    this.animate();
    
};

_NS_.SmasherFrame.prototype = Object.create( _NS_.Viewport.prototype );

/**
 * Update the environment map materials
 */
_NS_.SmasherFrame.prototype.updateEnvmap = function() {
    if ((this.model != null) && (this.envMap != null)) {
    	for (var i=0; i<this.model.materials.length; i++) {
    	    this.model.materials[i].envMap = this.envMap;
    	    this.model.materials[i].needsUpdate = true;
    	}
    }
}

_NS_.SmasherFrame.prototype.resize = function(w,h) {
    _NS_.Viewport.prototype.resize.call(this, w, h);
    
    // Update blur uniforms
    if (this.blurVShaderPass !== undefined) {
    	this.blurVShaderPass.uniforms[ "v" ].value = 2 / this.height;
        this.blurHShaderPass.uniforms[ "h" ].value = 2 / this.width;
    }
}

/**
 * Change the environment map
 */
_NS_.SmasherFrame.prototype.setEnvironment = function(path, fmt) {
 
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
_NS_.SmasherFrame.prototype.render = function( delta ) {
    if (this.controller) this.controller.update();
    if (this.o) { this.o.rotation.z += 0.01; }
    if (this.cmsh) { this.cmsh.rotation.z += 0.01; }
    if (this.lhc) { this.lhc.rotation.z += delta / 5000; }
    _NS_.Viewport.prototype.render.call(this, delta);
};

