<?php

// We will be working on the MC production scripts folder
chdir("/var/lib/t4t/scripts/mcprod");

function runRivet($beam, $process, $energy, $tune="default", $events=100, $seed=123, $generator="pythia8", $version="8.175") {

	// Run command
	$out = ""; $ret = 0;
	exec("./runRivet.sh boinc $beam $process $energy - - $generator $version $tune $events $seed", $out, $res);

}

function createTuneFile( $generator, $name, $variables=array() ) {

	$buf = "";
	foreach ($variables as $k => $v) {
		if (is_bool($v)) {
			$buf .= "$k = " . ($v ? "on" : "off") . "\n";
		} else if (is_string($v)) {
			$buf .= "$k = $v" . "\n";
		} else {
			$buf .= "$k = $v" . "\n";
		}
	}
	file_put_contents("configuration/$generator-$name.tune", $buf);

}

function parse_histogram( $data, $name ) {
	$bins = array();
	$xbounds = false;
	$ybounds = false;
	foreach ($data['data'] as $dat) {
		
		// Split data line
		$values = preg_split("/\\s+/",$dat);
		if (sizeof($values) < 6) echo ">> ERROR LINE '$dat' <<\n";

		// Parse float values
		$xlow = floatval($values[0]);
		$xfocus = floatval($values[1]);
		$xhigh = floatval($values[2]);
		$yval = floatval($values[3]);
		$yerrminus = floatval($values[4]);
		$yerrplus = floatval($values[5]);

		// Do not allow zero yval
		if ($yval == 0) $yval=0.00000001;
		if ($yval - $yerrminus == 0) $yerrminus = $yval - 0.00000001;
		if ($yval + $yerrplus == 0) $yerrplus = $yval + 0.00000001;

		// Initial values for bounds
		if (!$xbounds) $xbounds=array( $xlow, $xhigh );
		if (!$ybounds) $ybounds=array( $yval, $yval );

		// Update bounds
		if ($xlow < $xbounds[0]) $xbounds[0]=$xlow;
		if ($xhigh > $xbounds[1]) $xbounds[1]=$xhigh;
		if ($yval < $ybounds[0]) $ybounds[0]=$yval;
		if ($yval > $ybounds[1]) $ybounds[1]=$yval;

		// Store to bins
		$bins[] = array(
				$xlow, $xfocus, $xhigh,
				$yval, $yerrminus, $yerrplus
			);
	}

	return array(
		'bins' => $bins,
		'bounds' => array(
				'x' => $xbounds,
				'y' => $ybounds
			)
	);

}

function parse_metadata( $data, $name ) {
	return $data['prop'];
}

function parse_plot( $data, $name ) {
	return $data['prop'];
}

function parse_histostats( $data, $name ) {
	return $data['prop'];
}

function convert_lines( $data ) {
	$data = str_replace( "\r", "", $data );
	$lines = explode("\n", $data);
	$ans = array( 'prop' => array(), 'data' => array() );
	foreach ($lines as $l) {
		$l = trim($l);
		if ($l == "") continue;
		if (substr($l,0,1) == "#") continue;
		if (strstr($l, "=")) {
			$parts = explode("=", $l);
			$ans['prop'][$parts[0]] = $parts[1];
		} else {
			array_push( $ans['data'], $l);
		}
	}
	return $ans;
}

function parse_histofile( $file ) {
	$buffer = file_get_contents($file);
	$ans = array(); $matches = array();
	if (preg_match_all( '/# BEGIN PLOT ?(.*?)\\r?\\n(.*?)# END PLOT/s', $buffer, $matches ))
		$ans['plot'] = parse_plot( convert_lines($matches[2][0]), $matches[1][0] );
	if (preg_match_all( '/# BEGIN HISTOGRAM (.*?)\\r?\\n(.*?)# END HISTOGRAM/s', $buffer, $matches ))
		$ans['hist'] = parse_histogram( convert_lines($matches[2][0]), $matches[1][0] );
	if (preg_match_all( '/# BEGIN METADATA ?(.*?)\\r?\\n(.*?)# END METADATA/s', $buffer, $matches ))
		$ans['meta'] = parse_metadata( convert_lines($matches[2][0]), $matches[1][0] );
	if (preg_match_all( '/# BEGIN HISTOSTATS ?(.*?)\\r?\\n(.*?)# END HISTOSTATS/s', $buffer, $matches ))
		$ans['stat'] = parse_histostats( convert_lines($matches[2][0]), $matches[1][0] );
	return $ans;
}

// Fetch parameter
$alphaS = 0.1;
if (isset($_GET['v'])) {
	$alphaS = floatval($_GET['v']);
}

// Append overridable parameters for the default tune
createTuneFile( "pythia8", "default", array(

	// We are overwritting only the alphaShower
	"TimeShower:alphaSvalue" => $alphaS

));

// Calculate number of events
$numEvents = $_GET['events'];
if (!isset($numEvents)) $numEvents = 1000;

// Run rivet
runRivet("ee", "zhad", 91.2, "default", $numEvents);

// Load rivet data
$data_ref = parse_histofile( "dat/ee/zhad/tau/aleph1-charged/91.2/ALEPH_1996_S3486095.dat" );
$data_rivet = parse_histofile( "dat/ee/zhad/tau/aleph1-charged/91.2/pythia8/8.175/default.dat" );


// Get jsonP parameter
$cb = $_GET['cb'];
if (!isset($cb)) $cb="console.log";

// Render javascript
header("Content-Type: text/javascript");
echo $cb ."(" . 
	json_encode(array(
		'dat' => $data_rivet,
		'ref' => $data_ref
	)) 
	. ");\n";

//echo "\n".print_r($data_rivet);

?>