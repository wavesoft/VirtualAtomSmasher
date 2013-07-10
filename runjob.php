<?php

// We will be working on the MC production scripts folder
chdir("/var/lib/t4t/scripts/mcprod");

function runRivet($beam, $process, $energy, $tune="default", $generator="pythia8", $version="8.175", $events=100, $seed=123) {

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

function parse_histogram( $file ) {
	return file_get_contents($file);
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

// Run rivet
runRivet("ee", "zhad", 91.2);

// Load rivet data
$data_ref = parse_histogram( "dat/ee/zhad/tau/aleph1-charged/91.2/ALEPH_1996_S3486095.dat" );
$data_rivet = parse_histogram( "dat/ee/zhad/tau/aleph1-charged/91.2/pythia8/8.175/default.dat" );

// Render responses for now
print_r($data_ref);
print_r($data_rivet);

?>