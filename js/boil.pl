#!/usr/bin/perl
use strict;
use warnings;
use LWP::Simple;

my @boiled_files = (
		'js/jquery-1.8.2.min.js',
		'js/jquery-knob.min.js',
		'js/three.min.js',
		'js/stats.min.js',
		'js/smasher.js.php',
		'js/shaders/BeamShader.js',
		'js/shaders/CollisionShader.js',
		'js/jquery.easing.1.3.js',
		'js/md5.js',
		'js/d3.v3.min.js',
		'js/d3-components/userbar.js',

		'theme/bootstrap/bootstrap.min.js',

		'js/runtime/user-display.js',

	);

open OUTF, ">~tmp-dump.js";
my $buffer = "";
foreach my $f (@boiled_files) {
	print "Fetching $f...";
	$buffer = get("http://test.local/VirtualAtomSmasher/" . $f);
	if (!$buffer) {
		print "error\n";
		exit 1;
	}
	print OUTF $buffer;
	print "ok\n";
}
close OUTF;

print "Compressing...";
`java -jar C:/Users/icharala/Local/Develop/firebreath-FireBreath-b73d799/projects/CVMWeb/js/bin/yuicompressor-2.4.8.jar -o challenge.js ~tmp-dump.js`;

# Remove temp file
rename "~tmp-dump.js", "challenge.src.js";

