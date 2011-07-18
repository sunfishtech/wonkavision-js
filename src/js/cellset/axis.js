(function() {
  var Axis, Dimension;
  Dimension = this.Wonkavision.Dimension;
  this.Wonkavision.Axis = Axis = (function() {
    function Axis(cellset, data, start_index) {
      var dimension, _i, _len, _ref;
      this.cellset = cellset;
      this.start_index = start_index;
      this.members = {};
      this.dimensions = [];
      this.dimensionNames = [];
      _ref = data.dimensions;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dimension = _ref[_i];
        this.dimensions.push(new Dimension(dimension));
        this.dimensionNames.push(dimension.name);
      }
      this.end_index = this.start_index + this.dimensions.length - 1;
    }
    return Axis;
  })();
}).call(this);
