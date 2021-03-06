var UsersBar = function( id, options ) {
   var o = options || { };
   var config = {
      'width'           : o.width  || 200,
      'height'          : o.height || 400,
      'flip'               : o.flip == undefined ? false : o.flip,
      'caps'               : o.caps == undefined ? false : o.caps,

      'gradient'           : o.gradient == undefined ? true : o.gradient,
      'gradientMinOpacity' : o.gradientMinOpacity || 0.3,
      'gradientMaxOpacity' : o.gradientMaxOpacity || 0.8,

      'topUsers'           : o.topUsers || 5,
      'bottomUsers'        : o.bottomUsers || 5,

      'animationDelay'     : o.animationDelay || 2000,

      'userColor'          : o.userColor || '#FFF',
      'userHoverColor'     : o.userHoverColor || '#FFF',
      'userSelfColor'         : o.userSelfColor || '#F90',
      'userSelfHoverColor' : o.userSelfHoverColor || '#F90',
      'userBackColor'         : o.userBackColor || '#000',
      'userHoverBackColor' : o.userHoverBackColor || '#555',
      'userBackOpacity'    : o.userBackOpacity || 0,
      'userBackHoverOpacity'  : o.userBackHoverOpacity || 0.6,
      'lineColor'          : o.lineColor || '#FFF',
      'separatorColor'     : o.separatorColor || '#F90',
      'separatorOpacity'      : o.separatorOpacity || 0.4,
      'bulletColor'        : o.bulletColor || '#666',
      'bulletHoverColor'      : o.bulletHoverColor || '#FFF',
      'bulletSelfColor'    : o.bulletSelfColor || '#F90',
      'bulletSelfHoverColor'  : o.bulletSelfColor || '#F90',
      'backgroundColor'    : o.backgroundColor || '#000'
   };

   // Setup users
   var svg = d3.select(id).append("svg")
      .attr("width", config.width)
      .attr("height", config.height);

   // Configuration
   var vbarStyle        = "stroke:"+config.lineColor+";fill:none;stroke-width:1px",
      vbarCapStyle      = "stroke:"+config.lineColor+";fill:none;stroke-width:2px",
      vbarCapSize       = 10,
      vbarPadding       = 4,
      uframeStyle       = "fill:"+config.userBackColor+";stroke-width:0.5px;opacity:"+config.userBackOpacity,
      uframeDotStyle    = "stroke:"+config.backgroundColor+";fill:"+config.bulletColor+";stroke-width:2px",
      uframeStyleHover  = "fill:"+config.userHoverBackColor+";stroke-width:0.2px;opacity:"+config.userBackHoverOpacity,
      uframeDotStyleHover  = "stroke:"+config.backgroundColor+";fill:"+config.bulletHoverColor+";stroke-width:2px",
      uframePadding     = 4,
      uframeHeight      = 24,
      uframeArrHeight      = 10,
      uframeArrOffset      = 10;

   // Local vars        
   var minCredit = 0,
      maxCredit = 0,
      activeElement = null;

   /**
    Different icon:
    m 6.0523733,0.01538827 c -1.854275,0 -3.3392857,1.49897503 -3.3392857,3.33928573 0,1.8404322 1.4850107,3.3392856 3.3392857,3.3392856 1.854281,0 3.3582589,-1.4988534 3.3582589,-3.3392856 0,-1.8403107 -1.5039779,-3.33928573 -3.3582589,-3.33928573 z m -3.1875,5.95758943 c -1.727455,1.3512566 -2.88392861,3.7538729 -2.88392861,6.5078123 0,0 2.50814971,0.891741 6.03348221,0.891741 3.5253351,0 6.1093751,-0.891741 6.1093751,-0.891741 0,-2.7539394 -1.137502,-5.1565557 -2.8649553,-6.5078123 -0.7595614,0.9119891 -1.9212917,1.4799104 -3.2064734,1.4799104 -1.2851817,0 -2.4279825,-0.5679213 -3.1875,-1.4799104 z
    **/

   // Define the user icon
   var defs = svg.append("defs");
   defs.append("path")
      .attr("id", "ico-user")
      .attr("style", "stroke:none;fill:#999")
      .attr("d", "m 12.363198,11.707021 c 0,0.536933 -0.434011,0.970945 -0.970944,0.970945 l -9.7094455,0 c -0.535961,0 -0.97094412,-0.434012 -0.97094412,-0.970945 0,-1.9418892 1.87683502,-3.7536693 3.79542092,-4.4702269 C 3.3994378,6.5522788 2.6537526,5.3366558 2.6537526,3.9394666 l 0,-0.9709435 c 0,-2.14481613 1.7389612,-3.88377727 3.8837772,-3.88377727 2.144816,0 3.8837772,1.73896114 3.8837772,3.88377727 l 0,0.9709435 c 0,1.3971892 -0.7456862,2.6128122 -1.8525622,3.2973275 1.9176162,0.7165576 3.7944532,2.5283377 3.7944532,4.4702269 z")
   defs.append("path")
      .attr("id", "ico-user-me")
      .attr("style", "stroke:none;fill:#F90")
      .attr("d", "m 12.363198,11.707021 c 0,0.536933 -0.434011,0.970945 -0.970944,0.970945 l -9.7094455,0 c -0.535961,0 -0.97094412,-0.434012 -0.97094412,-0.970945 0,-1.9418892 1.87683502,-3.7536693 3.79542092,-4.4702269 C 3.3994378,6.5522788 2.6537526,5.3366558 2.6537526,3.9394666 l 0,-0.9709435 c 0,-2.14481613 1.7389612,-3.88377727 3.8837772,-3.88377727 2.144816,0 3.8837772,1.73896114 3.8837772,3.88377727 l 0,0.9709435 c 0,1.3971892 -0.7456862,2.6128122 -1.8525622,3.2973275 1.9176162,0.7165576 3.7944532,2.5283377 3.7944532,4.4702269 z");
   defs.append("path")
      .attr("id", "ico-crown")
      .attr("style", "stroke:none;fill:"+config.separatorColor+";opacity:"+config.separatorOpacity)
      .attr("d", "m 15.002682,4.7738008 -2.084199,1.8754026 0.175432,-1.9114577 c 0,0 -0.286826,-0.4310466 -0.661368,-0.081797 L 11.17008,6.2698178 9.525,3.6786949 c 0,0 -0.4531102,-0.4622585 -1.2178009,0 L 6.7035551,6.2041652 5.615983,4.655411 c 0,0 -0.2782161,-0.4396568 -0.6280042,0.027445 L 5.1026017,6.7670551 3.048,4.7738008 c 0,0 -0.635,-0.2566907 -0.9379703,0.3605509 L 3.437072,12.441695 h 10.957517 l 1.82697,-7.119534 c 0,0 -0.205029,-0.9411992 -1.218877,-0.5483602 z M 3.044233,3.1997542 C 3.044233,2.4420593 2.3629534,1.8307373 1.5207712,1.8307373 0.68289406,1.8301991 0,2.4420593 0,3.1997542 c 0,0.7560805 0.68289406,1.369017 1.5207712,1.369017 0.8427203,0 1.5234618,-0.6129365 1.5234618,-1.369017 z m 15.192644,-0.050047 c 0,0.7563844 -0.681113,1.3695551 -1.521309,1.3695551 -0.840196,0 -1.52131,-0.6131707 -1.52131,-1.3695551 0,-0.7563844 0.681114,-1.3695551 1.52131,-1.3695551 0.840196,0 1.521309,0.6131707 1.521309,1.3695551 z m -14.815411,9.8398094 10.991958,0 0,2.739111 -10.991958,0 z M 14.197631,3.4462202 c 0,0.4410509 -0.397296,0.7985932 -0.887386,0.7985932 -0.490089,0 -0.887385,-0.3575423 -0.887385,-0.7985932 0,-0.4410508 0.397296,-0.7985932 0.887385,-0.7985932 0.49009,0 0.887386,0.3575424 0.887386,0.7985932 z M 10.439292,1.3690169 c 0,0.7560872 -0.6813547,1.3690169 -1.5218477,1.3690169 -0.840493,0 -1.5218474,-0.6129297 -1.5218474,-1.3690169 C 7.3955969,0.61292976 8.0769513,0 8.9174443,0 9.7579373,0 10.439292,0.61292976 10.439292,1.3690169 z m -5.5766988,2.829517 c 0.4918559,0 0.8884619,-0.3573221 0.8884619,-0.7980551 0,-0.4418093 -0.396606,-0.7985932 -0.8884619,-0.7985932 -0.4891653,0 -0.8868475,0.3567839 -0.8868475,0.7985932 0,0.440733 0.3976822,0.7980551 0.8868475,0.7980551 z");
   defs.append("path")
      .attr("id", "ico-newbie")
      .attr("style", "stroke:none;fill:"+config.separatorColor+";opacity:"+config.separatorOpacity)
      .attr("d", "M 10.384,14.709 C 10.16,14.484 9.795,14.484 9.57,14.71 l -0.624,0.623 c -0.991,-0.306 -2.154,-0.039 -2.983,0.791 -1.162,1.161 -1.228,2.979 -0.147,4.06 1.081,1.08 2.898,1.015 4.06,-0.146 0.83,-0.829 1.097,-1.992 0.791,-2.983 l 0.624,-0.623 c 0.225,-0.226 0.225,-0.59 0,-0.815 l -0.907,-0.908 z m 8.97,-0.326 C 21.486,12.25 21.486,8.78 19.353,6.648 17.22,4.516 13.75,4.515 11.618,6.648 10.053,8.213 9.641,10.498 10.374,12.446 8.746,10.929 7.5,9.951 7.343,10.108 c -0.206,0.205 1.542,2.286 3.902,4.646 2.361,2.361 4.442,4.108 4.647,3.902 0.157,-0.157 -0.82,-1.403 -2.337,-3.03 1.948,0.733 4.233,0.322 5.799,-1.243 z m -4.689,0.367 c 0.354,-0.673 0.036,-1.763 -0.809,-2.606 -0.844,-0.845 -1.934,-1.162 -2.606,-0.809 -0.087,-1.06 0.271,-2.149 1.08,-2.958 1.459,-1.459 3.834,-1.459 5.293,0 1.458,1.458 1.459,3.833 0,5.292 -0.809,0.81 -1.898,1.168 -2.958,1.081 z");

   var g = defs.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%");
      g.append("stop")
         .attr("offset", "0%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:1");
      g.append("stop")
         .attr("offset", "33%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:0.1");
      g.append("stop")
         .attr("offset", "50%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:1");
      g.append("stop")
         .attr("offset", "66%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:0.1");
      g.append("stop")
         .attr("offset", "100%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:1");
   var g = defs.append("linearGradient")
            .attr("id", "separator-gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");
      g.append("stop")
         .attr("offset", "10%")
         .attr("style", "stop-color:" + config.separatorColor + ";stop-opacity:0");
      g.append("stop")
         .attr("offset", "50%")
         .attr("style", "stop-color:" + config.separatorColor + ";stop-opacity:"+config.separatorOpacity);
      g.append("stop")
         .attr("offset", "90%")
         .attr("style", "stop-color:" + config.separatorColor + ";stop-opacity:0");

   // Design environment
   var vbarOffset  = ( config.flip ? (config.width - vbarCapSize) : 0 );
   svg.append("line")
      .attr("style", vbarStyle)
      .attr("x1", vbarOffset+vbarCapSize/2)
      .attr("y1", vbarPadding)
      .attr("x2", vbarOffset+vbarCapSize/2)
      .attr("y2", config.height-vbarPadding);
   if (config.caps ) {
      svg.append("line")
         .attr("style", vbarCapStyle)
         .attr("x1", vbarOffset)
         .attr("y1", config.height-vbarPadding)
         .attr("x2", vbarOffset+vbarCapSize)
         .attr("y2", config.height-vbarPadding);
      svg.append("line")
         .attr("style", vbarStyle)
         .attr("x1", vbarOffset+vbarCapSize/2)
         .attr("y1", vbarPadding)
         .attr("x2", vbarOffset+vbarCapSize/2)
         .attr("y2", config.height-vbarPadding);
   }

   // Format credits number
   function formatNumber(number) {
       number = number.toFixed(2) + '';
       x = number.split('.');
       x1 = x[0];
       x2 = x.length > 1 ? '.' + x[1] : '';
       var rgx = /(\d+)(\d{3})/;
       while (rgx.test(x1)) {
           x1 = x1.replace(rgx, '$1' + ',' + '$2');
       }
       return x1;
   }

   // Create the two sepearation groups
   var sepDataGroup = svg.append("g");
   sepDataGroup.append("rect")
      .attr("width", config.width - uframeArrOffset - vbarCapSize)
      .attr("height", 1)
      .attr("y", config.height/3*2 )
      .attr("fill", "url(#separator-gradient)");
   sepDataGroup.append("rect")
      .attr("width", config.width - uframeArrOffset - vbarCapSize)
      .attr("height", 1)
      .attr("y", config.height/3 )
      .attr("fill", "url(#separator-gradient)");
   var centerOffset = config.flip 
      ? config.width/2 - uframeArrOffset - vbarCapSize - 8 
      : config.width/2 + uframeArrOffset + vbarCapSize - 15;
   sepDataGroup.append("use")
      .attr("y", config.height/3*2 )
      .attr("x", centerOffset )
      .attr("xlink:href", "#ico-newbie");
   sepDataGroup.append("use")
      .attr("y", config.height/3 - 20 )
      .attr("x", centerOffset )
      .attr("xlink:href", "#ico-crown");


   // Function to map credit value to pixels
   function credit2pixel( credit ) {
      var a = (credit - minCredit) / (maxCredit - minCredit),
          b = (config.height - (3 * vbarPadding) - uframeHeight/2 );
      return (1-a) * b;
   }

   // Gradient opacity
   function gradientOpacity( credit ) {
      var a = (credit - minCredit) / (maxCredit - minCredit),
          b = (config.gradientMaxOpacity - config.gradientMinOpacity),
          c = Math.sin( a * Math.PI ) * b + config.gradientMinOpacity; 
      return c;
   }

   // Function to prepare path
   function updateUser( object, cy ) {

      // Perform transision/transform
      object
         .transition()
         .duration(config.animationDelay)
         .attr("transform", function(d, i) {
            return "translate(0," + credit2pixel(d.credit) + ")"
         });

      object
         .select("use")
         .attr("xlink:href", function(d, i) {
            return "#ico-user" + (d.me ? "-me" : "");
         });

      object
         .select("use")
         .transition()
         .duration(config.animationDelay)
         .style("opacity", function(d, i) {
            if (d.me) return 1;
            if (!config.gradient) return 1;
            return gradientOpacity( d.credit );
         });

      object
         .select("text.txt-name")
         .text(function(d, i) {
            return d.text;
         });

      object
         .select("text.txt-name")
         .transition()
         .duration(config.animationDelay)
         .style("opacity", function(d, i) {
            if (d.me) return 1;
            if (!config.gradient) return 1;
            return gradientOpacity( d.credit );
         })
         .style("fill", function(d, i) {
            return d.me ? config.userSelfColor : config.userColor;
         });


      object
         .select("text.txt-credit")
         .transition()
         .duration(config.animationDelay)
         .style("opacity", function(d, i) {
            if (d.me) return 1;
            if (!config.gradient) return 1;
            return gradientOpacity( d.credit );
         })
         .style("fill", function(d, i) {
            return d.me ? config.userSelfColor : config.userColor;
         })
         .text(function(d, i) {
            return "#" + formatNumber(d.credit);
         });

      object
         .select("circle")
         .style("fill", function(d, i) {
            return d.me ? config.bulletSelfColor : config.bulletColor;
         })

      // Return object
      return object;

   }
   function makeUser( where ) {
      var group = where.append("g"),
         eWidth = config.width - vbarCapSize - uframeArrOffset - uframePadding,
         eArrOfs = (uframeHeight - uframeArrHeight) / 2.0,
         w = config.width;

      // Bind events to bring to front on hover
      group.attr("class", "uframegroup")
          .style("cursor", "pointer");

      // Prepare the background
      group.append("path")
         .attr("class", "uframe")
         .attr("style", uframeStyle)
         .attr("d", 
            config.flip 

            // Flipped
            ? "M" + uframePadding + ",0L" + eWidth + ",0" +
               "L" + eWidth + "," + eArrOfs +
               "L" + (eWidth + uframeArrOffset) + "," + (eArrOfs + uframeArrHeight/2) +
               "L" + eWidth + "," + (uframeHeight - eArrOfs ) +
               "L" + eWidth + "," + uframeHeight +
            "L" + uframePadding + "," + uframeHeight + "Z"

            // Regular
            : "M" + (w-uframePadding) + ",0" +
               "L" + (w-eWidth) + ",0" +
               "L" + (w-eWidth) + "," + eArrOfs +
               "L" + (w-eWidth - uframeArrOffset) + "," + (eArrOfs + uframeArrHeight/2) +
               "L" + (w-eWidth) + "," + (uframeHeight - eArrOfs ) +
               "L" + (w-eWidth) + "," + uframeHeight +
            "L" + (w-uframePadding) + "," + uframeHeight + "Z"

         );

      // Prepare the bullet on the line
      group.append("circle")
         .attr("class", "upoint")
         .attr("style", uframeDotStyle)
         .attr("r", 4)
         .attr("cx", 
            config.flip 
              ? (w - vbarCapSize/2)
              : (vbarCapSize/2)
          )
         .attr("cy", uframeHeight/2);

      // Use the icon
      var offset = config.flip ? -20 : 0;
      group.append("use")
         .attr("x", offset + vbarCapSize + uframeArrOffset + uframePadding + 5)
         .attr("y", 5)
         .attr("xlink:href", "#ico-user");

      // Create text element
      group.append("text")
         .attr("class", "txt-name")
         .attr("x", offset + vbarCapSize + uframeArrOffset + uframePadding + 5 + 18)
         .attr("y", uframeHeight/2 + 3)
         .attr("fill", "#666")
         .style("font-size", "12px")
         .text("---");

      var postOffset = config.flip ? 0 : 15;
      group.append("text")
         .attr("class", "txt-credit")
         .attr("x", offset + eWidth + postOffset )
         .attr("y", uframeHeight/2 + 2)
         .attr("fill", "#666")
         .style("text-anchor", "end")
         .style("font-size", "10px")
         .text("---");
         

      // Change colors on hover/hout
      group.on("mouseover", function(d,i) { 
         var g = d3.select(this);
         //g.moveToFront(); 
         g.select("path").attr("style", uframeStyleHover);
         g.select("circle").attr("style", uframeDotStyleHover);
         g.select("circle").style("fill", d.me ? config.bulletSelfHoverColor : config.bulletHoverColor);

         if (config.gradient) {
            g.select("text").attr("old:opacity", g.select("text").style("opacity"));
            g.selectAll("text").style("opacity", 1);
            g.selectAll("use").style("opacity", 1);
         }
         activeElement = g;
      });
      group.on("mouseout", function(d,i) {
         var g = d3.select(this);
         g.select("path").attr("style", uframeStyle);
         g.select("circle").attr("style", uframeDotStyle);
         g.select("circle").style("fill", d.me ? config.bulletSelfColor : config.bulletColor);

         if (config.gradient) {
            g.selectAll("text").style("opacity", g.select("text").attr("old:opacity"));
            g.selectAll("use").style("opacity", g.select("text").attr("old:opacity"));
         }
         activeElement = null;
      });

      return group;
   }

   /**
    * Update data
    */
   this.update = function(data) {

      // Reset previous selection on updaate
      if (config.gradient && (activeElement != null)) {
         activeElement.selectAll("text").style("opacity", activeElement.select("text").attr("old:opacity"));
         activeElement.selectAll("use").style("opacity", activeElement.select("text").attr("old:opacity"));
         activeElement = null;
      }

      // Sort the users
      var sData = data.slice(0);
      sData.sort(function(a,b) { return b.credit - a.credit });

      // First, normalize the credits
      maxCredit = sData[0].credit;
      minCredit = sData[sData.length-1].credit;
      console.log(sData);

      // Then calculate the position of the separator lines
      var a=sData.length-config.bottomUsers, b=config.topUsers-1;
      var separatorPos = [
         credit2pixel( sData[a].credit ),
         credit2pixel( sData[b].credit ) + uframeHeight
      ];

      /* Do the D3 update-enter-exit sequence */

      // (1a) Update
      var p = updateUser(
         svg.selectAll("g.uframegroup")
         .data( sData )
       );
      // (1b) Enter
      updateUser( makeUser( p.enter() ) )
      // (1c) Exit
      p.exit().remove();

      // (2) Update the data to the separators
      sepDataGroup.selectAll("rect")
         .data(separatorPos)
         .transition()
         .duration(config.animationDelay)
         .attr("y", function(d) { return d; });
      sepDataGroup.selectAll("use")
         .data(separatorPos)
         .transition()
         .duration(config.animationDelay)
         .attr("y", function(d,i) { return d + ((i==1) ? -25 : 5); });

   }
};