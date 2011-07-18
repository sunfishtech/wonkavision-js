(function() {
  var Axis, Cell, Cellset, MemberFilter;
  Cell = this.Wonkavision.Cell;
  Axis = this.Wonkavision.Axis;
  MemberFilter = this.Wonkavision.MemberFilter;
  this.Wonkavision.Cellset = Cellset = (function() {
    function Cellset(data) {
      var a, axis, cell, index, start_index, _i, _len, _len2, _ref, _ref2;
      if (data == null) {
        data = {};
      }
      this.aggregation = data.aggregation || null;
      this.slicer = data.slicer || [];
      this.filters = data.filters;
      this.totals = new Cell(this, data.totals);
      this.measure_names = data.measure_names || [];
      start_index = 0;
      this.axes = (function() {
        var _i, _len, _ref, _results;
        _ref = data.axes || [];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          axis = _ref[_i];
          a = new Axis(self, axis, start_index);
          start_index = a.end_index + 1;
          _results.push(a);
        }
        return _results;
      })();
      this.cells = {};
      _ref = data.cells || [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        this.cells[cell.key] = new Cell(self, cell);
      }
      _ref2 = ["columns", "rows", "pages", "chapters", "sections"];
      for (index = 0, _len2 = _ref2.length; index < _len2; index++) {
        axis = _ref2[index];
        this[axis] = this.axes[index];
      }
    }
    Cellset.prototype.cell = function(coordinates) {
      var coord, coords;
      coords = (function() {
        var _i, _len, _results;
        if (typeof coord !== "undefined" && coord !== null) {
          return coord.toString();
        } else {
          _results = [];
          for (_i = 0, _len = coordinates.length; _i < _len; _i++) {
            coord = coordinates[_i];
            _results.push(coord);
          }
          return _results;
        }
      })();
      return this.cells[coordinates] || new Cell(this);
    };
    return Cellset;
  })();
}).call(this);
