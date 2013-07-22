
/**
 * LHC Dipole segment that composes the virtual LHC Ring
 *
 * Each dipole is aligned in a way to use .lookAt to point towards the next element
 * of the ring.
 */
_NS_.LHCDipole = function( radius, length, segments, materialInner, materialOuter ) {
    THREE.Object3D.call( this );
    
    // Prepare variables
    this.radius = radius || 10;
    this.length = length || 1;
    this.segments = segments || 8;
    this.materialInner = materialInner || new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.materialOuter = materialOuter || this.materialInner;
    this.overdraw = 1;
    this.insetRadius = 1;
    this.openEnds = true;

    // The geometries for the dipole
    this.geomOuterRing = new THREE.CylinderGeometry( this.radius, this.radius, this.length+this.overdraw, this.segments, 1, this.openEnds );
    this.geomInnerRing = new THREE.CylinderGeometry( this.radius-this.insetRadius, this.radius-this.insetRadius, this.length+this.overdraw, this.segments, 1, this.openEnds );
	
	// The meshes of the dipole
	this.meshOuterRing = new THREE.Mesh( this.geomOuterRing, this.materialOuter );
	this.meshInnerRing = new THREE.Mesh( this.geomInnerRing, this.materialInner );
	
	// Align them in order to use .lookAt properly
	this.meshOuterRing.position.set( 0, 0, this.length/2-this.overdraw/2 );
	this.meshInnerRing.position.set( 0, 0, this.length/2-this.overdraw/2 );
	this.meshOuterRing.rotation.set( Math.PI/2, 0, 0);
	this.meshInnerRing.rotation.set( Math.PI/2, 0, 0);
	
	// Add some pointers for the object picker
	this.meshOuterRing.hoverTarget = this;
	this.meshInnerRing.hoverTarget = this;
	
	// Create the composite geometry of the dipole
	this.add( this.meshOuterRing );
	this.add( this.meshInnerRing );
	
}

_NS_.LHCDipole.prototype = Object.create( THREE.Object3D.prototype );

/**
 * Change the material in the LHC dipole
 */
_NS_.LHCDipole.prototype.setMaterial = function( materialInner, materialOuter ) {

    this.materialInner = materialInner || new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.materialOuter = this.materialInner;

    this.meshInnerRing.material = this.materialInner;
    this.meshOuterRing.material = this.materialOuter;
    
}