<!DOCTYPE html>
<html>
	<head>
		<title>Histogram Test</title>
		<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
		<script type="text/javascript" src="js/jcanvas.min.js"></script>
		<script type="text/javascript" src="js/d3.min.js"></script>
		<script type="text/javascript">

		var data = {};
		function setData(dat) { data = dat; };

		$(function(){
			console.log("INITIALIZED");


			// A formatter for counts.
			var formatCount = d3.format(",.0f");

			// Histogram margins
			var margin = {top: 30, right: 30, bottom: 30, left: 60},
			    width = $("#histogram").width() - margin.left - margin.right,
			    height = $("#histogram").height() - margin.top - margin.bottom;

			// X-Scale
			var x = d3.scale.linear()
			    .domain( data.dat.hist.bounds.x )
			    .range([0, width]);

			// Y-Scale
			var y = d3.scale.log()
			    .domain( data.dat.hist.bounds.y )
			    .range([height, 0]);

			// X-Axis
			var xAxis = d3.svg.axis()
			    .scale(x)
			    .orient("bottom");

			// Y-Axis
			var yAxis = d3.svg.axis()
			    .scale(y)
			    .orient("left");

			// Line plot that uses histogram data
			var line = d3.svg.line()
			    .x(function(d) { return x(d[1]); })
			    .y(function(d) { return y(d[3]); });

			// Area plot that shows the error band
			var area = d3.svg.area()
			    .x(function(d) { return x(d[1]); })
			    .y0(function(d) { return y(d[3] - d[4]); })
			    .y1(function(d) { return y(d[3] + d[5]); });

			// The plot container
			var svg = d3.select("#histogram").append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


			  svg.append("g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + height + ")")
			      .call(xAxis)
			    .append("text")
			      .attr("x", width)
			      .attr("dy", "30px")
			      .style("text-anchor", "end")
			      .text( data.dat.plot.XLabel );

			  svg.append("g")
			      .attr("class", "y axis")
			      .call(yAxis)
			    .append("text")
			      .attr("transform", "rotate(-90)")
			      .attr("y", 6)
			      .attr("dy", "-50px")
			      .style("text-anchor", "end")
			      .text( data.dat.plot.YLabel );

			  // Add error band for the computed data
			  svg.append("path")
			      .datum( data.dat.hist.bins )
			      .attr("class", "errband-dat")
			      .attr("d", area);

			  // Add computed data
			  svg.append("path")
			      .datum( data.dat.hist.bins )
			      .attr("class", "line-dat")
			      .attr("d", line);

			  // Add reference data
			  svg.append("path")
			      .datum( data.ref.hist.bins )
			      .attr("class", "line-ref")
			      .attr("d", line);


		});

		</script>

		<!-- Job runs here -->
		<?php
		$v = $_GET['v']; if (!isset($v)) $v=0.1;
		?>
		<script type="text/javascript" src="runjob.php?cb=setData&amp;v=<?php echo $v ?>"></script>

		<style type="text/css">

			body {
			  font: 12px sans-serif;
			}

			.axis path,
			.axis line {
			  fill: none;
			  stroke: #000;
			  shape-rendering: crispEdges;
			}

			.axis path {
			  stroke-width: 2px;
			}

			.line-ref,
			.line-dat {
			  fill: none;
			  stroke-width: 1.5px;
			}

			.line-dat {
			  stroke: steelblue;
			}
			.line-ref {
			  stroke: gold;
			}

			.errband-dat {
			  fill: #9FB4EA;
			}

			#histogram {
				width: 600px;
				height: 400px;
			}

		</style>
	</head>
	<body>
		<h1>Histogram Test</h1>
		<form method="get" action="histotest.php">
			<p>TimeShower:alphaSvalue = <input type="text" name="v" value="<?php echo $v ?>" /> <input type="submit" value="Re-Run" /></p>
		</form>
		<div id="histogram">
		</div>
	</body>
</html>