<!DOCTYPE html>
<html>
   <head>
      <title>Virtual Atom Smasher</title>
      <script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
      <script type="text/javascript" src="js/jquery-knob.min.js"></script>
      <script type="text/javascript" src="js/smasher.js.php"></script>
      <script type="text/javascript" src="js/three.min.js"></script>
      <script type="text/javascript" src="js/stats.min.js"></script>
      <script type="text/javascript" src="theme/bootstrap/bootstrap.min.js"></script>
      <link rel="stylesheet" type="text/css" href="theme/bootstrap/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="theme/bootstrap/bootstrap-responsive.min.css" />
      <link rel="stylesheet" type="text/css" href="theme/style.css" />
      <script type="text/javascript">
      $(function(){
         $(".knob").knob();
      });
      </script>
   </head>
   <body>
		<div class="container">
         <div id="stage" class="well"> </div>
         <input type="text" data-width="100" class="knob" />
      </div>
   </body>
</html>