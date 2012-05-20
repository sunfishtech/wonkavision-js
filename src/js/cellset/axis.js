(function() {
  var Axis, Dimension;
  Dimension = this.Wonkavision.Dimension;
  this.Wonkavision.Axis = Axis = (function() {
    function Axis(name, cellset, data, startIndex) {
      var dimension, idx, _len, _ref;
      this.name = name;
      this.cellset = cellset;
      this.startIndex = startIndex;
      this.dimensions = [];
      this.dimensionNames = [];
      _ref = data.dimensions;
      for (idx = 0, _len = _ref.length; idx < _len; idx++) {
        dimension = _ref[idx];
        this.dimensions.push(new Dimension(this, dimension, this.startIndex + idx));
        this.dimensionNames.push(dimension.name);
      }
      this.endIndex = this.startIndex + this.dimensions.length - 1;
    }
    Axis.prototype.dimensionNames = function() {
      var d, _i, _len, _ref, _results;
      _ref = this.dimensions;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        d = _ref[_i];
        _results.push(d.name);
      }
      return _results;
    };
    return Axis;
  })();
}).call(this);
