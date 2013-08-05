/**
 * @author Ioannis Charalampidis <ioannis.charalampidis[at]cern.ch>
 */

THREE.ComposerPass = function ( renderer, width, height, mixShader ) {

    this.width = width;
    this.height = height;
    this.mixShader = mixShader || THREE.AdditiveBlendShader;

	var renderTargetParameters = { 
    	    minFilter: THREE.LinearFilter, 
    	    magFilter: THREE.LinearFilter, 
    	    format: THREE.RGBFormat, 
    	    stencilBuffer: false 
    	};

	this.renderTarget = new THREE.WebGLRenderTarget( this.width, this.height, renderTargetParameters );
    this.composer = new THREE.EffectComposer( renderer );
    this.composer.autoRenderScreen = false;
    
    this.blendPass = new THREE.ShaderPass( this.mixShader, "tDiffuse2" );

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

};

THREE.ComposerPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {
	    
	    this.composer.render( delta );
	    this.composer.swapBuffers();
	    
	    this.blendPass.uniforms[ 'tDiffuse1' ].value = this.composer.renderTarget2;
	    this.blendPass.renderToScreen = this.renderToScreen;
    	return this.blendPass.render( renderer, writeBuffer, readBuffer, delta );
    	
	},
	
	setSize: function( width, height ) {
	    this.composer.setSize( width, height );
	    this.renderTarget.width = width;
	    this.renderTarget.height = height;
	},
	
	addPass: function(pass) {
	    this.composer.addPass(pass);
	}

};
