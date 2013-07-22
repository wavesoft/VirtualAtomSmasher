
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
	
	// Generate the progress marker
	var g = new THREE.RingGeometry( this.radius-this.thickness/2, this.radius+this.thickness/2, this.segments);
    var m = new THREE.MeshPhongMaterial({color: 0xff0000, side:THREE.DoubleSide});
    var shadow = new THREE.Mesh(g,m);
    shadow.position.set(0,0,-20);
	this.add(shadow);
	
}

_NS_.LHCRing.prototype = Object.create( THREE.Object3D.prototype );
