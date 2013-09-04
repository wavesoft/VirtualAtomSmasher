
_NS_.SmartObject = function(cfg) {

	// What parameters are being handled
	this.config = cfg || { };

	// Process parameters
	var params = cfg.parameters || {}; this.varValues = { }; this.varConfig = { };
	$.each(params, function(k,v) {
		if (v['default'] == undefined) v['default'] = 0;
		this.varValues[k] = v['default'];
		this.varConfig[k] = v;
	});

	// Fully-overridable functions for the binding variables
	this.geometryConstructor = function(cfg) 			{ return THREE.CubeGeometry(1,1,1); };
	this.materialConstructor = function(cfg) 			{ return THREE.MeshBasicMaterial({ 'color': 0xff0000 }); };
	this.meshConstructor     = function(cfg, geom, mat) { return THREE.Mesh(geom, mat); };
	this.geometryBinder      = function(cfg, geom) 		{ };
	this.materialBinder      = function(cfg, mat) 		{ };
	this.meshBinder          = function(cfg, mesh) 		{ };

}

_NS_.SmartObject.prototype.regenerate = function() {

	/* Build geometry(ies) */
	var geom = this.geometryConstructor( this.varValues );
	this.geometryBinder( geom );
	
	/* Build material(s) */
	var mat = this.materialConstructor( this.varValues );
	this.materialBinder( mat );

	/* Build mesh(es) */
	var mesh = this.meshConstructor( this.varValues, geom, mat );
	this.meshBinder( mesh );

	/* Update mesh array */

}
