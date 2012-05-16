(function() {
  var Axis, Cell, Cellset, Filter;
  Cell = this.Wonkavision.Cell;
  Axis = this.Wonkavision.Axis;
  Filter = this.Wonkavision.Filter;
  this.Wonkavision.Cellset = Cellset = (function() {
    function Cellset(data, query) {
      var a, axis, cell, f, filters, index, slicer, startIndex, _i, _len, _len2, _ref, _ref2;
      if (data == null) {
        data = {};
      }
      this.query = query != null ? query : null;
      this.aggregation = data.aggregation || null;
      slicer = data.slicer || [];
      filters = data.filters || [];
      this.slicer = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = slicer.length; _i < _len; _i++) {
          f = slicer[_i];
          _results.push(Filter.parse(f));
        }
        return _results;
      })();
      this.filters = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = filters.length; _i < _len; _i++) {
          f = filters[_i];
          _results.push(Filter.parse(f));
        }
        return _results;
      })();
      this.totals = new Cell(this, data.totals);
      this.measureNames = data.measure_names || [];
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
