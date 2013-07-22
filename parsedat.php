<?php

function parse_histogram($file) {
   // Parse lines
   $buf = file_get_contents(); $lines = explode("\n", $buf);
   
   // Prepare response
   $ans = array(
         'histogram' => array(),
         'stats' => array()
      );
   
   $parsing=0;
   foreach ($lines as $l) {
      if (substr($l,0,17) == "# BEGIN HISTOGRAM") $parsing=1;  // We are parsing histogram bins
      if (substr($l,0,15) == "# END HISTOGRAM") $parsing=0;    // Not parsing anything
      if (substr($l,0,18) == "# BEGIN HISTOSTATS") $parsing=2; // We are parsing histogram statistics
      if (substr($l,0,16) == "# END HISTOSTATS") $parsing=0;   // Not parsing anything
      $data = print_r(preg_split("/\s+/", $l));
      if ($parsing == 1) {
         foreach ($data as $v) {
            
         }
      } else if ($parsing == 2) {
         foreach ($data as $v) {
            
         }
      }
   }
}

print_r(parse_histogram("/Users/icharala/Develop/mcplots/svn/trunk/plotter/test-data/6-default.dat"));

?>