
var BeamShader = {

	uniforms: {
	
		"tTexture1": { type: "t", value: null },
		"tTexture2": { type: "t", value: null },
		"uColor"   : { type: "c", value: new THREE.Color( 0xffaa00 ) }, // single Color
		"uTime"    : { type: "f", value: 0.0  },
		"uOpacity" : { type: "f", value: 1.0  },
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
		"uniform float uOpacity;",

		"varying vec2 vUv;",

		"float ease(float v) {",
			//"return v;",
			"return 1.0 - pow( 1.0 - v, 2.0 );",
		"}",

		"void main() {",
		
	        "float uValue = abs(sin( vUv.x * M_PI + uTime ));",

	        "float tx1fw = mod( vUv.x * 20.0 + uTime, 1.0 );",
			"vec3 texel1 = texture2D( tTexture1, vec2( tx1fw , vUv.y ) ).xyz;",
			"float  tx1a = ease((texel1.x + texel1.y + texel1.z) / 3.0) * 0.2;",

	        "float tx2fw = mod( vUv.x * 8.0 + uTime, 1.0 );",
			"vec3 texel2 = texture2D( tTexture1, vec2( tx2fw , 1.0 - vUv.y ) ).xyz;",
			"float  tx2a = ease((texel2.x + texel2.y + texel2.z) / 3.0) * 0.5;",

	        "float tx3fw = mod( vUv.x * 4.0 + uTime * 10.0, 1.0 );",
			"vec3 texel3 = texture2D( tTexture2, vec2( tx3fw , 1.0 - vUv.y ) ).xyz;",
			"float  tx3a = ease((texel3.x + texel3.y + texel3.z) / 3.0);",

			"gl_FragColor  = clamp( vec4(texel1, tx1a) + vec4(texel2, tx2a) + vec4(texel3.xyz, tx3a), 0.0, 1.0);",
			"gl_FragColor *= vec4( uColor, uOpacity );",

	        // Swirl #1
	        /*
			"vec4 texel1 = texture2D( tTexture1, vec2( vUv.x * 20.0 + mod( uTime, 1.0 ) , vUv.y ) );",
			"vec4 texel2 = texture2D( tTexture1, vec2( vUv.x * 8.0 + mod( uTime, 1.0 ) , 1.0 - vUv.y ) ) / vec4( 1.0, 1.0, 1.0, 2.0);",
			"vec4 texel3 = texture2D( tTexture2, vec2( vUv.x * 4.0 - mod( uTime * 10.0 , 1.0 ) , 1.0 - vUv.y ) );",
			"vec4 color = clamp( texel1 + texel2 + texel3, 0.0, 1.0 );", 
			"gl_FragColor = color * vec4( uColor, uOpacity);",
			*/
			
		"}"

	].join("\n")

};