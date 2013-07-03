(function() {
  var Cell, Measure;

  Measure = this.Wonkavision.Measure;

  this.Wonkavision.Cell = Cell = (function() {
    function Cell(cellset, data) {
      var measure, _i, _len, _ref;

      this.cellset = cellset;
      this.measures = {};
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
