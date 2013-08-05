/**
 * @author Ioannis Charalampidis <ioannis.charalampidis[at]cern.ch>
 */

THREE.ParticleTextureShader = {

	uniforms: {
	
		"uScale": { type: "f", value: 1.0 },
		"uTime":  { type: "f", value: 0.0 }
		
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [
        "#define M_PI 3.1415926535897932384626433832795",
        
		"uniform float uTime;",
		"uniform float uScale;",
		
		"float uValue;",

		"varying vec2 vUv;",

		"void main() {",
		    
		    "uValue = abs(sin( vUv.x * M_PI * uScale + uTime * 5.0 ));",
			"gl_FragColor = vec4( uValue, uValue, uValue, 0.0 );",
			
		"}"

	].join("\n")

};