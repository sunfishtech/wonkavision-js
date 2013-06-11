(function() {
  var Axis, Dimension;

  Dimension = this.Wonkavision.Dimension;

  this.Wonkavision.Axis = Axis = (function() {
    function Axis(name, cellset, data, startIndex) {
      var dimension, idx, _i, _len, _ref;

      this.name = name;
      this.cellset = cellset;
      this.startIndex = startIndex;
      this.dimensions = [];
      this.dimensionNames = [];
      _ref = data.dimensions;
      for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
        dimension = _ref[idx];
        this.dimensions.push(new Dimension(this, dimension, this.startIndex + idx));
        this.dimensionNames.push(dimension.name);
      }
      this.endIndex = this.startIndex + this.dimensions.length - 1;
    }

    return Axis;

  })();

}).call(this);
