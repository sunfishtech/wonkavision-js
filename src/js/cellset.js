(function() {
  var Axis, Cell, Cellset, MemberFilter;
  Cell = this.Wonkavision.Cell;
  Axis = this.Wonkavision.Axis;
  MemberFilter = this.Wonkavision.MemberFilter;
  this.Wonkavision.Cellset = Cellset = (function() {
    function Cellset(data) {
      var a, axis, cell, index, startIndex, _i, _len, _len2, _ref, _ref2;
      if (data == null) {
        data = {};
      }
      this.aggregation = data.aggregation || null;
      this.slicer = data.slicer || [];
      this.filters = data.filters;
      this.totals = new Cell(this, data.totals);
      this.measure_names = data.measure_names || [];
      startIndex = 0;
      this.axes = (function() {
        var _i, _len, _ref, _results;
        _ref = data.axes || [];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          axis = _ref[_i];
          a = new Axis(this, axis, startIndex);
          startIndex = a.endIndex + 1;
          _results.push(a);
        }
        return _results;
      }).call(this);
      this.cells = {};
      _ref = data.cells || [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        this.cells[cell.key] = new Cell(this, cell);
      }
      _ref2 = ["columns", "rows", "pages", "chapters", "sections"];
      for (index = 0, _len2 = _ref2.length; index < _len2; index++) {
        axis = _ref2[index];
        this[axis] = this.axes[index];
      }
    }
    Cellset.prototype.cell = function() {
      var coord, coords;
      coords = (function() {
        var _i, _len, _results;
        if (typeof coord !== "undefined" && coord !== null) {
          return coord.toString();
        } else {
          _results = [];
          for (_i = 0, _len = arguments.length; _i < _len; _i++) {
            coord = arguments[_i];
            _results.push(coord);
          }
          return _results;
        }
      }).apply(this, arguments);
      return this.cells[coords] || new Cell(this);
    };
    return Cellset;
  })();
}).call(this);
