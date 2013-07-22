
_NS_.ObjectPicker = function( viewport ) {
    
    this.projector = new THREE.Projector();
	this.raycaster = new THREE.Raycaster();
	this.mouse = new THREE.Vector2();
	this.viewport = viewport;
	this.intersects = [];	
	
};

_NS_.ObjectPicker.prototype.updateIntersectionsFromEvent = function( event ) {

    var parentOffset = $(this.viewport.renderer.domElement).offset(); 
	return this.updateIntersectionsFromPoint( event.pageX - parentOffset.left, event.clientY - parentOffset.top );
	
};

_NS_.ObjectPicker.prototype.updateIntersectionsFromPoint = function( x, y ) {

	this.mouse.x = ( x / this.viewport.width ) * 2 - 1;
	this.mouse.y = - ( y / this.viewport.height ) * 2 + 1;
	if (this.mouse.x < -1.0) this.mouse.x=-1.0;
	if (this.mouse.x > 1.0) this.mouse.x=1.0;
	if (this.mouse.y < -1.0) this.mouse.y=-1.0;
	if (this.mouse.y > 1.0) this.mouse.y=1.0;

    // Calculate the source vector
	var vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 1 );
	this.projector.unprojectVector( vector, this.viewport.camera );

    // Cast ray
	this.raycaster.set( this.viewport.camera.position, vector.sub( this.viewport.camera.position ).normalize() );

    // Find intersections
	this.intersects = this.raycaster.intersectObjects( this.viewport.scene.children, true );
	
}

_NS_.ObjectPicker.prototype.getIntersection = function() {
    
    // Return the first pick target or the first object
	if ( this.intersects.length > 0 ) {
	    
	    // Check for pick targets
	    for (var i=0; i<this.intersects.length; i++) {
	        if (this.intersects[i].object.pickTarget !== undefined) {
	            return this.intersects[i].object.pickTarget;
	        }
	    }
	    
	    // No pick target? Pick the first available
	    return false;//this.intersects[0].object;
	    
    } else {
        return false;
    }

}
