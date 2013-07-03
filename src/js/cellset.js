(function() {
  var Axis, Cell, Cellset, Filter;

  Cell = this.Wonkavision.Cell;

  Axis = this.Wonkavision.Axis;

  Filter = this.Wonkavision.Filter;

  this.Wonkavision.Cellset = Cellset = (function() {
    function Cellset(data, query) {
      var a, axis, c, cell, f, filters, i, index, name, slicer, _i, _j, _len, _len1, _ref, _ref1, _ref2;

      if (data == null) {
        data = {};
      }
      this.query = query != null ? query : null;
      this.cube = data.cube || null;
      this.includeTotals = !!((_ref = this.query) != null ? _ref.includeTotals : void 0);
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
      this.measureNames = data.measure_names || [];
      this.levelCount = 0;
      this.axes = (function() {
        var _i, _ref1, _results;

        _results = [];
        for (i = _i = 0, _ref1 = data.axes.length; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
          axis = data.axes[i];
          name = Wonkavision.AXIS_NAMES[i];
          a = new Axis(name, this, axis, this.levelCount);
          this.levelCount = a.endIndex + 1;
          _results.push(a);
        }
        return _results;
      }).call(this);
      this.cells = {};
      this.totals = new Cell(this, data.totals);
      this.cells[this.totals.key] = this.totals;
      _ref1 = data.cells || [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        cell = _ref1[_i];
        c = new Cell(this, cell);
        this.cells[c.key] = c;
      }
      _ref2 = Wonkavision.AXIS_NAMES;
      for (index = _j = 0, _len1 = _ref2.length; _j < _len1; index = ++_j) {
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
