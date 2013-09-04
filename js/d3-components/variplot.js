var VariPlot = function( id, options ) {

    var o = options || { };
    var config = this.config = {
      'width'           : o.width  || 200,
      'height'          : o.height || 400,
    }

    // Setup users
    var svg = this.svg = d3.select(id).append("svg")
      .attr("width", config.width)
      .attr("height", config.height);

    // Setup scales

};

VariPlot.prototype.setData = function(data, reference) {
  
}