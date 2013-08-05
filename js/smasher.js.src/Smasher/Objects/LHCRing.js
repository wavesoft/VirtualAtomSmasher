
_NS_.LHCRing = function( config ) {
    THREE.Object3D.call( this );
	
	var cfg = config || { };
	this.radius = cfg.radius || 100;
	this.thickness = cfg.thickness || 5;
	this.segments = cfg.segments || 40;
	this.innerMaterial = cfg.material || new THREE.MeshPhongMaterial({ color: 0x333333, side: THREE.BackSide, transparent: true, opacity: 0.5 });
	this.outerMaterial = cfg.material || new THREE.MeshPhongMaterial({ color: 0x6666FF, side: THREE.FrontSide, transparent: true, opacity: 0.5 });
	
	var perimeter = 2 * Math.PI * this.radius,
	    segment_size = perimeter / this.segments;
	
	// Generate and store dipoles
	this.dipoles = [];
	var a = 0, a_step = Math.PI*2 / this.segments,
	    lX = Math.sin(a-a_step)*this.radius, lY = Math.cos(a-a_step)*this.radius, lZ=0;
	for (var i=0; i<this.segments; i++, a+=a_step) {
	    var x = Math.sin(a) * this.radius,
	        y = Math.cos(a) * this.radius,
	        z = 0;

	    // Create an LHCDipole object
    	var dipole_segment = new _NS_.LHCDipole( this.thickness, segment_size, 8, this.innerMaterial, this.outerMaterial );
	    dipole_segment.position.set( x, y, z );
	    dipole_segment.lookAt(new THREE.Vector3( lX, lY, lZ ));
	    this.add(dipole_segment);
	    lX=x; lY=y; lZ=z;

        // Store it on dipole stack
	    this.dipoles.push(dipole_segment);
	}
	
	// Create a position-bound mirror object for the glow scene (rendered after)
	this.glowObject = new THREE.Object3D();
	this.glowObject.position = this.position;
	this.glowObject.rotation = this.rotation;
	
	// Generate the progress marker
	this.shadowGeometry = new THREE.RingGeometry( this.radius-this.thickness/2, this.radius+this.thickness/2, this.segments);
    this.shadowMaterial = new THREE.MeshBasicMaterial({color: 0x990000, side:THREE.DoubleSide});
    this.shadow = new THREE.Mesh( this.shadowGeometry, this.shadowMaterial );
    this.shadow.position.set(0,0,-20);
	//this.add(this.shadow);	
	
	var shader = THREE.ParticleTextureShader;
    this.ringMatUniforms = THREE.UniformsUtils.clone( shader.uniforms );
	this.ringMaterial = new THREE.ShaderMaterial( {
		uniforms: this.ringMatUniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader
	} );
	
	this.ringMatUniforms['uScale'].value = 10.0;
	
    // Prepare the objects for the blur scene
	this.ringGeometry = new THREE.TorusGeometry( this.radius, 1, 10, this.segments );
	//this.ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
	this.ringMesh = new THREE.Mesh( this.ringGeometry, this.ringMaterial );
	this.glowObject.add( this.ringMesh );
	

}

_NS_.LHCRing.prototype = Object.create( THREE.Object3D.prototype );

_NS_.LHCRing.prototype.setProgress = function( percent ) {
    
}

_NS_.LHCRing.prototype.update = function(delta) {
    this.ringMatUniforms['uTime'].value += delta / 1000;
};