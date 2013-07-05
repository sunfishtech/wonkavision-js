(function() {
  var Cell, Filter, Measure;

  Measure = this.Wonkavision.Measure;

  Filter = this.Wonkavision.Filter;

  this.Wonkavision.Cell = Cell = (function() {
    function Cell(cellset, data) {
      var measure, _i, _len, _ref,
        _this = this;

      this.cellset = cellset;
      this.measures = {};
      this.dimensions = [];
      this.filters = [];
      this.empty = true;
      if (data) {
        _ref = data.measures;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          measure = _ref[_i];
          this.addMeasure(measure);
        }
        this.key = data.key.slice(0);
        while (this.key.length < this.cellset.levelCount) {
          this.key.push(null);
        }
        this.dimensions = data.dimensions || [];
        this.filters = _.map(this.dimensions, function(dim, idx) {
          return new Filter(dim, {
            value: _.compact(_this.key)[idx]
          });
        });
      }
    }

    Cell.prototype.addMeasure = function(measureData) {
      var name;

      name = measureData.name;
      this[name] = new Measure(measureData);
      this.measures[name] = this[name];
      if (!this[name].empty) {
        return this.empty = false;
      }
    };

    return Cell;

  })();

}).call(this);
