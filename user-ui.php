<!DOCTYPE html>
<html>
   <head>
      <title>Virtual Atom Smasher</title>
      <script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
      <script type="text/javascript" src="js/d3.min.js"></script>
      <script type="text/javascript" src="js/radar-chart-min.js"></script>
      <script type="text/javascript" src="js/three.min.js"></script>
      <script type="text/javascript" src="js/stats.min.js"></script>
      <script type="text/javascript" src="js/smasher.js.php"></script>
      <script type="text/javascript" src="theme/bootstrap/bootstrap.min.js"></script>
      <link rel="stylesheet" type="text/css" href="theme/bootstrap/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="theme/bootstrap/bootstrap-responsive.min.css" />
      <link rel="stylesheet" type="text/css" href="theme/ui.css" />
   </head>
   <body>
      <div id="userscreen">
         <div id="ring"></div>
         <div id="overlay">&nbsp;</div>
         <div id="lbl_rate" class="label">1,000 <i>/sec</i></div>
         <div id="lbl_users" class="label">100 <i>users</i></div>
      </div>
      <div id="chart"></div>
   </body>
</html>