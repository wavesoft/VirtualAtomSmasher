
_NS_.AcceleratorRing = function( camera ) {
   THREE.Object3D.call( this );

   // Prepare variables
   this.cTime = 0;
   this.animations = [];
   this.fxTimer = 0;
   this.fxEasing = jQuery.easing.easeOutQuad;
   this.fxDelay = 1000;
   this.fxCompleteCb = null;

   // Animation variables
   this.ringRotationSpeed = 0;
   this.collisionOpacity = 0;

   // ============================
   //       Setup Camera
   // ============================

   // We also control the camera because we provide
   // the animation functions to zoom in and out from 
   // the accelerator ring
   this.camera = camera;
   this.camera.rotation.z = Math.PI/2;

   this.camera.position.x = 100;
   this.camera.position.z = 50;
   this.camera.rotation.y = Math.PI/2 - 0.5;

   this.camera.position.x = -5;
   this.camera.position.z = 0;
   this.camera.rotation.y = Math.PI/2;

   this.camera.position.x = 100;
   this.camera.position.z = 0;
   this.camera.rotation.y = Math.PI/2;


   // ============================
   //       Setup Lighting
   // ============================

   var l = new THREE.PointLight( 0xffffff );
   l.position.set(0, 0, 0);
   this.add(l);

   var l2 = this.lightM = new THREE.PointLight( 0x008080, 0, 20 );
   l2.position.set(0, -15, 0);
   this.add(l2);

   var l3 = this.lightR = new THREE.PointLight( 0x37FFFF, 0, 20 ); //20 );
   l3.position.set(-13, 7.5, 0);
   this.add(l3);

   var l4 = this.lightL = new THREE.PointLight( 0xffaa00, 0, 20 );
   l4.position.set(-13, -7.5, 0);
   this.add(l4);

   // ============================
   //    Setup the two beams
   // ============================

   var beamTex1 = THREE.ImageUtils.loadTexture( 'theme/img/beam-1b.png' );
   beamTex1.wrapS = THREE.RepeatWrapping;
   beamTex1.wrapT = THREE.RepeatWrapping;

   var beamTex2 = THREE.ImageUtils.loadTexture( 'theme/img/beam-2b.png' );
   beamTex2.wrapS = THREE.RepeatWrapping;
   beamTex2.wrapT = THREE.RepeatWrapping;

   var beamShader = BeamShader;
   var beamShaderUniforms2f = this.beamShaderUniformsLf = THREE.UniformsUtils.clone( beamShader.uniforms );
   var beamShaderUniforms1f = this.beamShaderUniformsRf = THREE.UniformsUtils.clone( beamShader.uniforms );
   var beamShaderUniforms2b = this.beamShaderUniformsLb = THREE.UniformsUtils.clone( beamShader.uniforms );
   var beamShaderUniforms1b = this.beamShaderUniformsRb = THREE.UniformsUtils.clone( beamShader.uniforms );
   
   beamShaderUniforms2f['tTexture1'].value = beamTex1;
   beamShaderUniforms2f['tTexture2'].value = beamTex2;
   beamShaderUniforms1f['tTexture1'].value = beamTex1;
   beamShaderUniforms1f['tTexture2'].value = beamTex2;
   beamShaderUniforms2b['tTexture1'].value = beamTex1;
   beamShaderUniforms2b['tTexture2'].value = beamTex2;
   beamShaderUniforms1b['tTexture1'].value = beamTex1;
   beamShaderUniforms1b['tTexture2'].value = beamTex2;
   
   beamShaderUniforms2f['uColor'].value = new THREE.Color( 0xffaa00 );
   beamShaderUniforms1f['uColor'].value = new THREE.Color( 0x37FFFF ); //0x6666FF
   beamShaderUniforms2b['uColor'].value = new THREE.Color( 0xffaa00 );
   beamShaderUniforms1b['uColor'].value = new THREE.Color( 0x37FFFF ); //0x6666FF
   
   var beamMaterial2f = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms2f,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.FrontSide
   } );

   var beamMaterial2b = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms2b,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.BackSide
   } );
   

   var beamMaterial1f = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms1f,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.FrontSide
   } );

   var beamMaterial1b = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms1b,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.BackSide
   } );

   var beamGeom = new THREE.TorusGeometry( 20, 1.2, 20, 20, Math.PI );


   var beamMesh1b = this.beamMeshLb = new THREE.Mesh( beamGeom, beamMaterial1b );
   beamMesh1b.rotation.z = 0;
   beamMesh1b.rotation.y = Math.PI;
   this.add( beamMesh1b );

   var beamMesh1f = this.beamMeshLf = new THREE.Mesh( beamGeom, beamMaterial1f );
   beamMesh1f.rotation.z = 0;
   beamMesh1f.rotation.y = Math.PI;
   this.add( beamMesh1f );

   var beamMesh2b = this.beamMeshRb = new THREE.Mesh( beamGeom, beamMaterial2b );
   beamMesh2b.rotation.z = -Math.PI;
   this.add( beamMesh2b );

   var beamMesh2f = this.beamMeshRf = new THREE.Mesh( beamGeom, beamMaterial2f );
   beamMesh2f.rotation.z = -Math.PI;
   this.add( beamMesh2f );

   // ============================
   //  Setup the ring wireframes
   // ============================

   var backgroundMat = this.backgroundMat = new THREE.MeshPhongMaterial({ side: THREE.FrontSide, transparent: true, color: 0x606060, opacity: 0.4 });
   var wireframeMat  = this.wireframeMat = new THREE.MeshPhongMaterial({ wireframe: true, side: THREE.BackSide, color: 0x000000 });

   var ringBackgroundGeom = new THREE.TorusGeometry( 20, 3, 10, 20, Math.PI );
   var ringBackgroundMesh = this.ringBackgroundMesh = new THREE.Mesh( ringBackgroundGeom, backgroundMat );
   ringBackgroundMesh.rotation.z = Math.PI/2;
   this.add( ringBackgroundMesh );

   var ringOutlineGeom = new THREE.TorusGeometry( 20, 3.1, 18, 25, Math.PI *2 );
   var ringOutlineMesh = this.ringOutlineMesh = new THREE.Mesh( ringOutlineGeom, wireframeMat );
   this.add( ringOutlineMesh );

   // ===============================
   //  Setup the collision animation
   // ===============================

   var clsnFlareTex1 = THREE.ImageUtils.loadTexture( "theme/img/collision-1.png" );
   var clsnFlareTex2 = THREE.ImageUtils.loadTexture( "theme/img/collision-2.png" );

   var flareColor = 0xD1FCEE ; //0xFFBD9D;
   var collisionMaterial1 = this.collisionMaterial1 = new THREE.SpriteMaterial( { map: clsnFlareTex1, useScreenCoordinates: false, color: flareColor, fog: true } );
   var collisionMaterial2 = this.collisionMaterial2 = new THREE.SpriteMaterial( { map: clsnFlareTex1, useScreenCoordinates: false, color: flareColor, fog: true } );
   var collisionMaterial3 = this.collisionMaterial3 = new THREE.SpriteMaterial( { map: clsnFlareTex1, useScreenCoordinates: false, color: flareColor, fog: true } );

   var collisionSprite1 = this.collisionSprite1 = new THREE.Sprite( collisionMaterial1 );
   collisionSprite1.position.set( -15, 0, 0 );
   collisionSprite1.scale.set( 100, 100, 100 );
   this.add( collisionSprite1 );

   var collisionSprite2 = this.collisionSprite2 = new THREE.Sprite( collisionMaterial2 );
   collisionSprite2.position = collisionSprite1.position.clone();
   collisionSprite2.scale = collisionSprite1.scale.clone();
   this.add( collisionSprite2 );

   var collisionSprite3 = this.collisionSprite3 = new THREE.Sprite( collisionMaterial3 );
   collisionSprite3.position = collisionSprite1.position.clone();
   collisionSprite3.scale = collisionSprite1.scale.clone();
   this.add( collisionSprite3 );

   // ===============================
   //   Prepare useful functions
   // ===============================

   // Target values for various animation parameters
   this.animationTargets = [
      {
         'o': this.camera.position,             // Object
         't': this.camera.position.clone(),     // Target 
         's': this.camera.position.clone(),     // Source
         'v'  : ['x','y','z']                   // Value names
      },
      {
         'o': this.camera.rotation,
         't': this.camera.rotation.clone(),
         's': this.camera.rotation.clone(),
         'v'  : ['x','y','z']
      },
      {
         'o': this,
         't': { 'ringRotationSpeed': 0, 'collisionOpacity': 0 },
         's': { 'ringRotationSpeed': 0, 'collisionOpacity': 0 },
         'v'  : [ 'ringRotationSpeed', 'collisionOpacity' ]
      },
      {
         'o': this.lightL,
         't': { 'intensity': 0 },
         's': { 'intensity': 0 },
         'v'  : ['intensity']
      },
      {
         'o': this.lightR,
         't': { 'intensity': 0 },
         's': { 'intensity': 0 },
         'v'  : ['intensity']
      },
      {
         'o': this.lightM,
         't': { 'intensity': 0 },
         's': { 'intensity': 0 },
         'v'  : ['intensity']
      },
      {
         'o': beamShaderUniforms1f['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': beamShaderUniforms1b['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': beamShaderUniforms2f['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': beamShaderUniforms2b['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': this.backgroundMat,
         't': { 'opacity': 0 },
         's': { 'opacity': 0 },
         'v': [ 'opacity' ]
      },
      {
         'o': this.wireframeMat.color,
         't': new THREE.Color(0,0,0),
         's': new THREE.Color(0,0,0),
         'v': [ 'r','g','b' ]
      },
      {
         'o': this.wireframeMat.emissive,
         't': new THREE.Color(0,0,0),
         's': new THREE.Color(0,0,0),
         'v': [ 'r','g','b' ]
      }
   ];

   this.setAnimationTarget = function(index, vars) {
      $.each(vars, (function(k,v) {
         this.animationTargets[index].s[k] = this.animationTargets[index].o[k];
         this.animationTargets[index].t[k] = v;
      }).bind(this));
   }

   /**
    * This function returns an animation cycle: for the collision flare
    * 0.0 - 0.2 => { scale: 0.0 - 0.2, opacity: 0.0 - 1.0 },
    * 0.2 - 0.8 => { scale: 0.2 - 1.0, opacity: 1.0 },
    * 0.8 - 1.0 => { scale: 1.1 - 1.8, opacity: 1.0 - 0.0 }
    */
   this.fxCycle = function(v, maxScale, maxOpacity) {
      if (maxScale == undefined) maxScale = 1.0;
      if (maxOpacity == undefined) maxOpacity = 1.0;
      if (v < 0.2) {
         v = v/0.2;
         return { 
            's':   (v * 0.2) * maxScale,
            'o': v * maxOpacity
         };
      } else if (v < 0.8) {
         v = (v-0.2)/0.6;
         return { 
            's':   (0.2 + v*0.8) * maxScale,
            'o': 1.0 * maxOpacity
         };
      } else {
         v = (v-0.8)/0.2;
         return { 
            's':   (1.0 + v*0.2) * maxScale,
            'o': (1.0 - v) * maxOpacity
         };
      }
   }
}

_NS_.AcceleratorRing.prototype = Object.create( THREE.Object3D.prototype );


/**
 * Update animation callback
 */
_NS_.AcceleratorRing.prototype.onAnimationCompleted = function(cb) {
   this.fxCompleteCb = cb;
};

/**
 * Update the beam colors
 */
_NS_.AcceleratorRing.prototype.setBeamColors = function( left, right, collision ) {
   this.lightL.color.setHex( left );
   this.beamShaderUniformsLf['uColor'].value.setHex( left );
   this.beamShaderUniformsLb['uColor'].value.setHex( left );

   this.lightR.color.setHex( right );
   this.beamShaderUniformsRf['uColor'].value.setHex( right );
   this.beamShaderUniformsRb['uColor'].value.setHex( right );

   if (collision == undefined) collision = left | right;

   this.collisionMaterial1.color.setHex( collision );
   this.collisionMaterial2.color.setHex( collision );
   this.collisionMaterial3.color.setHex( collision );

};

/**
 * Update state/animation of the LHC Ring
 */
_NS_.AcceleratorRing.prototype.update = function(delta) {

      // Update current time for the animations
      this.cTime += delta / 3000;

      // Update the beam animation 
      this.beamShaderUniformsLf['uTime'].value += delta/1000;
      this.beamShaderUniformsRf['uTime'].value += delta/1000;
      this.beamShaderUniformsLb['uTime'].value += delta/1000;
      this.beamShaderUniformsRb['uTime'].value += delta/1000;

      // Update the sprite animation
      this.collisionSprite1.rotation += delta / 7000;
      this.collisionSprite2.rotation -= delta / 8000;
      this.collisionSprite3.rotation -= delta / 5000;
      var fx = this.fxCycle( this.cTime % 1.0, 10.0, this.collisionOpacity );
      this.collisionSprite1.scale.set( fx.s, fx.s, fx.s );
      this.collisionMaterial1.opacity = fx.o;
      fx = this.fxCycle( (this.cTime + 0.33333) % 1.0, 10.0, this.collisionOpacity );
      this.collisionSprite2.scale.set( fx.s, fx.s, fx.s );
      this.collisionMaterial2.opacity = fx.o;
      fx = this.fxCycle( (this.cTime + 0.66666) % 1.0, 10.0, this.collisionOpacity );
      this.collisionSprite3.scale.set( fx.s, fx.s, fx.s );
      this.collisionMaterial3.opacity = fx.o;

      // Rotate the wireframe
      if (this.ringRotationSpeed != 0)
         this.ringOutlineMesh.rotation.z += delta * this.ringRotationSpeed / 1000;

      // Update animations
      if (this.fxTimer < this.fxDelay) {

         // Wrap to max
         this.fxTimer += delta;
         if (this.fxTimer > this.fxDelay) this.fxTimer = this.fxDelay;

         // Animation cycle over each object's variables
         for (var i=0; i<this.animationTargets.length; i++) {
            var o = this.animationTargets[i].o,
                s = this.animationTargets[i].s,
                t = this.animationTargets[i].t,
                v = this.animationTargets[i].v;
            for (var j=0; j<v.length; j++) {
               if (typeof(s) == 'number') {
                  o[v[j]] = this.fxEasing(null, this.fxTimer, s, t-s, this.fxDelay);
               } else {
                  o[v[j]] = this.fxEasing(null, this.fxTimer, s[v[j]], t[v[j]] - s[v[j]], this.fxDelay);
               }
            }
         }

         // Check for completion
         if ((this.fxTimer == this.fxDelay) && (this.fxCompleteCb != undefined))
            this.fxCompleteCb();

      }

};

/**
 * Update the current view of the ring
 */
_NS_.AcceleratorRing.prototype.setView = function(view) {

   this.fxTimer = 0;
   this.view = view;

   if (view == 0) {

      this.setAnimationTarget(0, { 'x': 100, 'z': 0 });
      this.setAnimationTarget(1, { 'y': Math.PI/2, 'x': 0   });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 0,
         'collisionOpacity': 0
      });

      this.setAnimationTarget(3, { 'intensity': 0 });
      this.setAnimationTarget(4, { 'intensity': 0 });
      this.setAnimationTarget(5, { 'intensity': 0 });

      this.setAnimationTarget(6, { 'value': 0 });
      this.setAnimationTarget(7, { 'value': 0 });
      this.setAnimationTarget(8, { 'value': 0 });
      this.setAnimationTarget(9, { 'value': 0 });

      this.setAnimationTarget(10, { 'opacity': 0 });

      this.setAnimationTarget(11, { 'r': 0.5, 'g': 0.5, 'b': 0.5 });
      this.setAnimationTarget(12, { 'r': 0.4, 'g': 0.4, 'b': 0.4 });

   } else if (view == 1) {

      this.setAnimationTarget(0, { 'x': 100, 'z': 40 });
      this.setAnimationTarget(1, { 'y': Math.PI/2 - 0.45, 'x': 0 });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 1,
         'collisionOpacity': 0
      });

      this.setAnimationTarget(3, { 'intensity': 0 });
      this.setAnimationTarget(4, { 'intensity': 0 });
      this.setAnimationTarget(5, { 'intensity': 0 });

      this.setAnimationTarget(6, { 'value': 0 });
      this.setAnimationTarget(7, { 'value': 0 });
      this.setAnimationTarget(8, { 'value': 0 });
      this.setAnimationTarget(9, { 'value': 0 });

      this.setAnimationTarget(10, { 'opacity': 0 });

      this.setAnimationTarget(11, { 'r': 0.8, 'g': 0.8, 'b': 0.8 });
      this.setAnimationTarget(12, { 'r': 0.1, 'g': 0.1, 'b': 0.1 });

   } else if (view == 2) {

      this.setAnimationTarget(0, { 'x': -5, 'z': 0 });
      this.setAnimationTarget(1, { 'y': Math.PI/2, 'x': 0 });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 0,
         'collisionOpacity': 1
      });

      this.setAnimationTarget(3, { 'intensity': 1 });
      this.setAnimationTarget(4, { 'intensity': 1 });
      this.setAnimationTarget(5, { 'intensity': 1 });

      this.setAnimationTarget(6, { 'value': 1 });
      this.setAnimationTarget(7, { 'value': 0.5 });
      this.setAnimationTarget(8, { 'value': 1 });
      this.setAnimationTarget(9, { 'value': 0.5 });

      this.setAnimationTarget(10, { 'opacity': 0.4 });

      this.setAnimationTarget(11, { 'r': 0.2, 'g': 0.2, 'b': 0.2 });
      this.setAnimationTarget(12, { 'r': 0.2, 'g': 0.2, 'b': 0.2 });

   } else if (view == 3) {

      this.setAnimationTarget(0, { 'x': 100, 'z': 20 });
      this.setAnimationTarget(1, { 'y': Math.PI/2 - 0.2, 'x': 0.2   });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 0,
         'collisionOpacity': 0
      });

      this.setAnimationTarget(3, { 'intensity': 0 });
      this.setAnimationTarget(4, { 'intensity': 0 });
      this.setAnimationTarget(5, { 'intensity': 0 });

      this.setAnimationTarget(6, { 'value': 0 });
      this.setAnimationTarget(7, { 'value': 0 });
      this.setAnimationTarget(8, { 'value': 0 });
      this.setAnimationTarget(9, { 'value': 0 });

      this.setAnimationTarget(10, { 'opacity': 0 });

      this.setAnimationTarget(11, { 'r': 1, 'g': 0, 'b': 0 });
      this.setAnimationTarget(12, { 'r': 0.4, 'g': 0.4, 'b': 0.4 });

   }

};
