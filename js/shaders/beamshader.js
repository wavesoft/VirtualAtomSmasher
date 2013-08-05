
var BeamShader = {

	uniforms: {
	
		"tTexture1": { type: "t", value: null },
		"tTexture2": { type: "t", value: null },
		"uColor"   : { type: "c", value: new THREE.Color( 0xffaa00 ) }, // single Color
		"uTime"    : { type: "f", value: 0.0  }
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

		"uniform sampler2D tTexture1;",
		"uniform sampler2D tTexture2;",
		"uniform vec3 uColor;",
		"uniform float uTime;",

		"varying vec2 vUv;",

		"void main() {",
		
	        "float uValue = abs(sin( vUv.x * M_PI + uTime ));",
			"vec4 texel1 = texture2D( tTexture1, vec2( vUv.x * 20.0 + mod( uTime, 1.0 ) , vUv.y ) );",
			"vec4 texel2 = texture2D( tTexture1, vec2( vUv.x * 8.0 + mod( uTime, 1.0 ) , 1.0 - vUv.y ) ) / vec4( 1.0, 1.0, 1.0, 2.0);",
			"vec4 texel3 = texture2D( tTexture2, vec2( vUv.x * 4.0 - mod( uTime * 10.0 , 1.0 ) , 1.0 - vUv.y ) );",
			"vec4 color = clamp( texel1 + texel2 + texel3, 0.0, 1.0 );", 
			"gl_FragColor = color * vec4( uColor, 1.0);",
			
		"}"

	].join("\n")

};