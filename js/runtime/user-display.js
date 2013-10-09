
/**
 * =================================================================
 *  Local Functions for the UI animation
 * =================================================================
 */

/**
 * Display a rotating progress messages
 */
var rotatingProgressTimer = 0,
    rotatingActive = false,
    rotatingMessages = [];
function __resetNestProgress() {
   clearTimeout(rotatingProgressTimer);
   rotatingActive = false;
   rotatingMessages = [];
   rotatingProgressTimer = 0;
}
function __showNestProgress() {

   // Make sure we don't have any left-over
   // timer running...
   if (!rotatingActive) return;
   if (rotatingMessages.length == 0) return;

   // Display message
   var msg = rotatingMessages.shift();
   progressMessage(msg, true, true);

   // Reset queue when we are done
   if (rotatingMessages.length == 0) {
      __resetNestProgress();
   } else {
      // Otherwise schedule next tick
      rotatingProgressTimer = setTimeout(__showNestProgress, Math.random() * 5000 + 2000 );
   }
}

/**
 * Setup rotating messages
 */
function progressRotatingMessages( messages ) {

   // Set messages
   rotatingMessages = messages;

   // Start rotation if not active
   if (!rotatingActive) {
      rotatingActive = true;
      __showNestProgress();
   }

}

/**
 * Cancel message rotation
 */
function progressCancelRotating() {
   if (!rotatingActive) return;
   __resetNestProgress();
}

/**
 * Roll-in an animating text entry on the progress bar
 */
var progressCurrentText = "#loading-text-1",
    lastProgressText = "";
function progressAnimateText( message ) {

   // Do nothing if the last text is excactly the same
   // with the new one
   if (lastProgressText == message) return;
   lastProgressText = message;

   // Fade out the past
   $(progressCurrentText).stop(true, true);
   $(progressCurrentText).animate({
      'opacity': 0
   }, 200);

   // Switch between past and current text messages
   if (progressCurrentText == "#loading-text-1") {
      progressCurrentText = "#loading-text-2";
   } else {
      progressCurrentText = "#loading-text-1";
   }

   // Scroll-in the current
   $(progressCurrentText).stop(true, true);
   $(progressCurrentText).html( message );
   $(progressCurrentText).css({
      'opacity': 0,
      'top': 25
   });
   $(progressCurrentText).animate({
      'opacity': 1,
      'top': 0
   }, 200, 'easeOutExpo');
   
};

/**
 * Update progress bar
 */
function progressUpdate( percent, text ) {
   percent = Math.round(percent);
   progressCancelRotating();
   $("#loading").fadeIn(500);
   $("#loading").removeClass('error');
   $("#progressbar-value").css({ 'width': percent + '%' });
   progressAnimateText(text);
   $("#loading-percent").html( percent + "%" );
}

/**
 * Display an error on the progress bar without progress indicator
 */
function progressError( text ) {
   progressCancelRotating();
   $("#loading").fadeIn(500);
   $("#loading").addClass('error');
   $("#progressbar-value").css({ 'width': '100%' });
   progressAnimateText(text);
   $("#loading-percent").html("");
}

/**
 * Display a message on the progress bar without progress indicator
 */
function progressMessage( text, pending, preserveRotatingMessages ) {
   if (!preserveRotatingMessages) progressCancelRotating();
   $("#loading").fadeIn(500);
   $("#loading").removeClass('error');
   $("#progressbar-value").css({ 'width': '100%' });
   progressAnimateText(text);
   if (!pending) {
      $("#loading-percent").html("");
   } else {
      $("#loading-percent").html("<img src=\"theme/img/ajax-dots.gif\" />");
   }
}

function showLaunchControls() {
   $("#launch-controls").fadeIn(500);
}

function hideLaunchControls() {
   $("#launch-controls").fadeOut(500, function() {
      $("#launch-controls").hide();
   });
}

function showProgress() {
   $("#loading").fadeIn(500);
}

function hideProgress() {
   progressCancelRotating();
   $("#loading").fadeOut(500);
}

function showDashboard() {
   $("#upper-controls").fadeIn(500);
   $("#lower-controls").fadeIn(500);
}

function hideDashboard() {
   $("#upper-controls").fadeOut(500, function() {
      $("#upper-controls").hide();
   });
   $("#lower-controls").fadeOut(500, function() {
      $("#lower-controls").hide();
   });
}

function aceleratorStop() {
   v_session.hibernate();
   hideDashboard();
   setTimeout(function() {
      progressMessage("Ramping-down the accelerator", true);
   }, 500);
}

function aceleratorCleanup() {
   v_session.close();
   hideDashboard();
   setTimeout(function() {
      progressMessage("Dismantling the accelerator", true);
   }, 500);
}

function acceleratorStart() {

   var boincInfo = boincGetInfo();
   if (!boincInfo) {
      v_session.start( localBoincInfo );
   } else {

      // Prepare BOINC string
      var boincStr = "BOINC_USERNAME=" + boincInfo.name + "\n" + 
                     "BOINC_AUTHENTICATOR=" + boincInfo.authenticator + "\n" + 
                     "BOINC_USERID=" + boincInfo.id + "\n";
      console.log("Starting with BOINC_Config", boincStr);
      v_session.start({
         'boinc_config': boincStr
      });
      v_session.setProperty("/boinc/name", boincInfo.name);
      v_session.setProperty("/boinc/id", boincInfo.id);
      v_session.setProperty("/boinc/auth", boincInfo.authenticator);

      // You cannot disconnect now
      $("#boinc-logout").hide();

   }

   hideLaunchControls();
   progressMessage("Ramping-up the accelerator", true);
}

function acceleratorRDP( href ) {
   v_session.openRDPWindow();
}

function acceleratorOpenRDP() {
   var resolution = v_session.__session.resolution,
       resParts = resolution.split("x");
   var rdpObjectReference = window.open(
      "http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#" + v_session.rdpURL + "," + resParts[0] + "," + resParts[1] , "cernvmRDP");
   window.w = rdpObjectReference;
}

function acceleratorSetRDPURL( a ) {
   var resolution = v_session.__session.resolution,
       resParts = resolution.split("x");
   a.href = "http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#" + v_session.rdpURL + "," + resParts[0] + "," + resParts[1];
}

function acceleratorLogs() {
   var windowObjectReference = window.open(v_session.apiURL + "/logs" , "cernvmLogs");
}

/**
 * =================================================================
 *  BOINC-Specific functions
 * =================================================================
 */


var localBoincInfo = null;
function boincGetInfo() {
   if (localBoincInfo != null) return localBoincInfo;
   if (!localStorage.getItem("boinc-id")) {
      return false;
   } else {
      return localBoincInfo = {
         id: localStorage.getItem("boinc-id"),
         name: localStorage.getItem("boinc-name"),
         authenticator: localStorage.getItem("boinc-auth")
      };
   }
}

function boincLogin() {
   $("#boinc-error-msg").hide();
   $("#boinc-login-form").fadeIn();
}

function boincLogout() {
   localBoincInfo = null;
   localStorage.removeItem("boinc-id");
   localStorage.removeItem("boinc-name");
   localStorage.removeItem("boinc-auth");
   boincUpdateStatus( true );
}

function boincUpdateStatus( fade ) {
   var bInfo = boincGetInfo();
   if (!bInfo) {
      if (!fade) {
         $("#boinc-login").show();
         $("#boinc-status").hide();
      } else {
         $("#boinc-status").fadeOut(250, function() {
            $("#boinc-login").fadeIn(250);
         });
      }
   } else {
      $("#boinc-name").html(bInfo.name);
      if (!fade) {
         $("#boinc-login").hide();
         $("#boinc-status").show();
      } else {
         $("#boinc-login").fadeOut(250, function() {
            $("#boinc-status").fadeIn(250);
         });
      }
   }
}

function boincDoLogin() {
   var uEmail = $("#boinc-login-email").val(),
       uPassword = $("#boinc-login-password").val(),
       uRemember = $("#boinc-login-remember").prop("checked");

   $("#boinc-error-msg").hide();
   $("#boinc-login-form input").prop("disabled", true);
   $("#boinc-login-form button").prop("disabled", true);
   $("#boinc-login-submit").html("Loading...");

   var arg_email = escape(uEmail),
       arg_password = md5( uPassword + arg_email.toLowerCase() );

   var boincBaseURL = "http://lhcathome2.cern.ch/test4theory";

   // =============================================================
   // Validate account and get BOINC authenticator
   var jqxhr = $.ajax( {
      url: boincBaseURL+"/lookup_account.php?email_addr="+arg_email+"&passwd_hash="+arg_password+"&get_opaque_auth=1",
      dataType: 'xml'
   })
   // =============================================================
       .done(function( msg ) {
         // Successful response
         if (msg.firstChild.tagName == "error") {
            $("#boinc-error-msg").html( "Login error: " + msg.getElementsByTagName("error_msg")[0].textContent );
            $("#boinc-error-msg").fadeIn();
         } else {

            // We got the authenticator
            var authenticator = msg.getElementsByTagName("authenticator")[0].textContent;
            if (!authenticator) {
               $("#boinc-error-msg").html( "Unable to identify the authenticator" );
               $("#boinc-error-msg").fadeIn();
            }

            // =============================================================
            // Now try to get more information about the user
            $.ajax({
               url: boincBaseURL+"/am_get_info.php?account_key="+authenticator,
               dataType: 'xml'
            })
            // =============================================================
               .done(function( msg ) {

                  // Handle response
                  if (msg.firstChild.tagName == "error") {
                     $("#boinc-error-msg").html( "User info error: " + msg.getElementsByTagName("error_msg")[0].textContent );
                     $("#boinc-error-msg").fadeIn();
                  } else {

                     // Populate local info
                     localBoincInfo = {

                        'id'           : msg.getElementsByTagName('id')[0].textContent,
                        'name'         : msg.getElementsByTagName('name')[0].textContent,
                        'authenticator': authenticator

                     };

                     // If user clicked remember me, store authenticator in local store
                     // otherwise, clean previous traces.
                     if (uRemember) {
                        localStorage.setItem("boinc-id", localBoincInfo.id);
                        localStorage.setItem("boinc-name", localBoincInfo.name);
                        localStorage.setItem("boinc-auth", localBoincInfo.authenticator);
                     } else {
                        localStorage.removeItem("boinc-id");
                        localStorage.removeItem("boinc-name");
                        localStorage.removeItem("boinc-auth");
                     }

                     // Hide window and upate status
                     $("#boinc-login-form").fadeOut();
                     boincUpdateStatus(true);

                  }

               }).fail(function( msg ) {
                  // I/O Error
                  $("#boinc-error-msg").html("Connunication error: " + msg);
                  $("#boinc-error-msg").fadeIn();
               });

         }
       })

       .fail(function( msg ) {
         // I/O Error
         $("#boinc-error-msg").html("Connunication error: " + msg);
         $("#boinc-error-msg").fadeIn();
       })

       .always(function() {
         // In any case, restore the layout
         $("#boinc-login-form input").prop("disabled", false);
         $("#boinc-login-form button").prop("disabled", false);
         $("#boinc-login-submit").html("Login");
       });

}

/**
 * =================================================================
 *  Higher-level functions
 * =================================================================
 */

var lhc, v_session;

function setPreparingView() {
   lhc.setView(1);
   progressRotatingMessages([

         "Connecting to your instance",

         "Configuring network",
         "Starting critical services",
         "Preparing environment",
         "Preparing accelerator software",

         "Contacting time services",
         "Calibrating timers",

         "Discovering environment",
         "Connecting to controller interface",
         "Connecting to CERN",
         "Authorizing client",
         "Mounting network filesystems",

         "Configuring job manager",

         "Downloading simulator components",
         "Downloading physics configuration",
         "Downloading reference data",

         "Starting work queue",
         "Starting simulator",

         "Probe injection beam",
         "Beam dumped",
         "Physics injection beam",
         "Preparing ramp",
         "Ramping accelerator",
         "Reached flat top",
         "Squeezing beams",
         "Adjusting beams",
         "Stable physics beams",

         "Waiting for physics job"

      ]);
}


/**
 * Entry point function
 *
 * --- Progress events ---
 *
 * [00 - 40%] : Setting up environment
 *        10  : Plugin Ready
 *     10-40  : Downloading/Installing hypervisor
 *
 * [40 - 80%] : Open session
 */

var inited = false,
    isTimeTraveller = false;
$(document).ready(function() {
   if (inited) return; inited = true;

   // Reset UI
   $("#not-supported-msg").hide();
   $("#upper-controls").hide();
   $("#lower-controls").hide();
   $("#launch-controls").hide();
   $("#boinc-login-form").hide();

   boincUpdateStatus();
   progressUpdate(0, "Setting up environment");
   $("body").removeClass('not-ready');

   // Knobify dials
   $(".dial").knob();

   // Prepare two functions that start the system after a delay
   // not to completely freeze the browser

   //////////////////////////////////////////////////////////
   function setupWebGL() {
   //////////////////////////////////////////////////////////

      // Check for WebGL Errors
      try {

         // Setup Three.js Viewport
         var v = new M.Viewport({
            container: "#collider",
            bg: 0x000000, //0x202020, 0xf5f5f5,
            autostop: false,
            fullscreen: false,
            stats: false
         });

         v.renderer.sortObjects = false;

         // Setup accelerator ring
         lhc = new M.AcceleratorRing( v.camera );
         v.scene.add(lhc);

         // Receive render updates to the accelerator ring
         v.addUpdateHandler( lhc.update.bind(lhc) );

         // Default view
         lhc.setView(0);

      } catch (e) {

         // WebGL Error
         $("#not-supported-msg").fadeIn();
         $("#loading").hide();

         // The user is from the past
         isTimeTraveller = true;
         return;

      }

   }

   //////////////////////////////////////////////////////////
   function setupCVM() {
   //////////////////////////////////////////////////////////

      CVM.debugLogging = true;

      // Installation events are only between 10-20%
      CVM.addInstallProgressHandler(function(percent, msg) {
         var value = percent * 30 / 100;
         progressUpdate(10 + value, msg);
         console.log("InstallProgress = ", 10+value);
      });

      // Initialize CernVM
      CVM.startCVMWebAPI(
         function(plugin) {
            progressUpdate(20, "Establishing session");

            // Plugin progress events (session itialization are between 20 and 60)
            plugin.addEventListener('progress', function(percent, msg) {
               var value = percent * 40 / 100;
               progressUpdate(40 + value, msg);
               console.log("pluginProgress = ", 40 + value);
            });

            // Start session
            //plugin.requestSession( 'http://labs.wavesoft.gr/t4t/sign.php', function(session) {
            //plugin.requestSession( 'http://test.local/VirtualAtomSmasher/sign.php', function(session) {
            plugin.requestSession( 'http://test.local/smasher/sign.php', function(session) {

               window.s = session;
               v_session = session;

               // Handle various session states
               if (session.state == 2) {

                  // OPEN -> START
                  showLaunchControls();
                  //session.start();

               }

               // Check if this VM is already bound to a BOINC account
               // (Since we are pausing/resuming the floppy cannot be changed!)
               var boincUser = session.getProperty("/boinc/name");
               if (boincUser != "") {

                  // Disable logout
                  $("#boinc-logout").hide();

                  // Update local info too
                  if (localBoincInfo == null) {
                     localBoincInfo = {
                        name: boincUser,
                        id: session.getProperty("/boinc/id"),
                        authenticator: session.getProperty("/boinc/auth")
                     };
                     boincUpdateStatus(false);
                  }
               }


               // Session progress events (session open/resume are between 80 and 100)
               session.addEventListener('progress', function(percent, msg) {
                  var value = percent * 20 / 100;
                  progressUpdate(80 + value, msg);
                  console.log("sessionProgress = ", 80 + value);
               });

               session.addEventListener('error', function(msg) {
                  lhc.setView(3);
                  progressError( msg );
               });

               session.addEventListener('sessionStateChange', function(newState) {

                  if (newState == 2) { // Open Session
                     progressMessage("Your accelerator is closed");
                     lhc.setView(0);
                     showLaunchControls();
                     hideDashboard();

                  } else if ((newState == 3) || (newState == 4)) { // Started 

                     setPreparingView();
                     hideLaunchControls();
                     hideDashboard();

                  } else if (newState == 6) { // Paused
                     progressMessage("Your accelerator is frozen");
                     lhc.setView(0);
                     showLaunchControls();
                     hideDashboard();

                  } else if (newState == 0) { // Closed (?! Destroyed??)
                     progressMessage("Your accelerator is destroyed");
                     lhc.setView(0);
                     showLaunchControls();
                     hideDashboard();

                     // We have the VM Destroyed. This means
                     // we can change a user
                     $("#boinc-logout").show();
                     boincUpdateStatus(false);

                  }
               });

               session.addEventListener('apiAvailable', function() {
                  lhc.setView(2);
                  hideProgress();
                  showDashboard();
               });

               session.addEventListener('apiUnavailable', function() {

                  // This is valid only when fired when the VM is running
                  if (lhc.view != 0) {
                     progressMessage("Disconnected from the accelerator");
                     lhc.setView(1);
                     hideDashboard();

                     // Check if the session is also lost
                     session.__session.update();
                     setTimeout(function() {
                        if ((session.state == 2) && (lhc.view != 0)) {

                           progressMessage("Your accelerator is closed");
                           lhc.setView(0);
                           showLaunchControls();
                           hideDashboard();

                        }
                     }, 1000);
                  }

               });


            }, function (err_msg) {

               // Could not request session
               lhc.setView(3);
               progressError( err_msg );

            });

         },
         function(e) {
            lhc.setView(3);
            progressError(e);
         },
         
         // Let the plugin initialize the environment
         true
      );

   }

   var users = [];
   var uid = 8;
   var u = new UsersBar("#user-list", { width: 250, height: 250, flip: true });

   window.updateUsers = function() {
      users = [];
      var k=Math.round(Math.random() * 10000000);
      for (var i=0; i<15; i++) {
         //Math.round(Math.random() * 10000000)
         users.push({
            'credit': k,
            'text': 'User '+i,
            'me': (i == uid)
         });
         k += Math.round(Math.random()*80)+30;
      }
      u.update(users);
   }
   window.updateUsers();

   // Delaied-initialization
   progressUpdate(0, "Starting WebGL");
   setTimeout(function() {

      // Setup WebGL
      setupWebGL();

      // Schedule CVM initialization
      progressUpdate(0, "Starting CernVM WebAPI");
      setTimeout(function() {

         // Skip initialization if webgl failed
         if (isTimeTraveller) return;

         // Setup CernVM
         setupCVM();

      }, 500);

   }, 500);
   /*
   showDashboard();
   */

   
});