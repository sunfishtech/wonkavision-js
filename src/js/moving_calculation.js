(function() {
  var MovingCalculation;

  this.Wonkavision.MovingCalculation = MovingCalculation = (function() {
    function MovingCalculation(options) {
      if (options == null) {
        options = {};
      }
      options = _.defaults(options, {
        windowSize: 30,
        calculation: "average",
        injectMissingDates: true
      });
      this.windowSize = options.windowSize;
      this.calculation = options.calculation;
      this.injectMissingDates = options.injectMissingDates;
      this.reset();
    }

    MovingCalculation.prototype.add = function(date, value) {
      date = moment(date);
      this.currentDate || (this.currentDate = date);
      this.advanceTo(date);
      this.addSample(value);
      return this;
    };

    MovingCalculation.prototype.reset = function() {
      this.samples = [];
      this.values = [];
      this.currentDate = null;
      return this;
    };

    MovingCalculation.prototype.advanceTo = function(date) {
      var _results;

      date = moment(date);
      _results = [];
      while ((this.currentDate != null) && this.currentDate < date) {
        _results.push(this.skipDay());
      }
      return _results;
    };

    MovingCalculation.prototype.skipDay = function() {
      if (this.injectMissingDates) {
        return this.addSample(0);
      } else {
        return this.advanceDay();
      }
    };

    MovingCalculation.prototype.advanceDay = function() {
      return this.currentDate.add('days', 1);
    };

    MovingCalculation.prototype.addSample = function(value) {
      this.samples.unshift(value);
      if (this.samples.length > this.windowSize) {
        this.samples.pop();
      }
      this.values.push([this.currentDate.clone().unix() * 1000, this.currentValue()]);
      return this.advanceDay();
    };

    MovingCalculation.prototype.currentValue = function() {
      var reducer, sum;

      reducer = function(memo, cur) {
        return memo + cur;
      };
      sum = _.reduce(this.samples, reducer, 0);
      if (this.calculation === "average") {
        return sum / this.samples.length;
      } else {
        return sum;
      }
    };

    return MovingCalculation;

  })();

}).call(this);
