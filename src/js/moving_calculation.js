(function() {
  var MovingCalculation;

  this.Wonkavision.MovingCalculation = MovingCalculation = (function() {
    function MovingCalculation(options) {
      if (options == null) {
        options = {};
      }
      options = _.defaults(options, {
        windowSize: 30,
        windowType: "days",
        calculation: "average",
        transformation: function(val) {
          return val;
        },
        injectMissingDates: true,
        treatNullsAsZero: true
      });
      this.windowSize = options.windowSize;
      this.windowType = options.windowType;
      this.calculation = options.calculation;
      this.injectMissingDates = options.injectMissingDates;
      this.transformation = options.transformation;
      this.treatNullsAsZero = options.treatNullsAsZero;
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
        _results.push(this.skip());
      }
      return _results;
    };

    MovingCalculation.prototype.skip = function() {
      if (this.injectMissingDates) {
        return this.addSample(null);
      } else {
        return this.advance();
      }
    };

    MovingCalculation.prototype.advance = function() {
      return this.currentDate.add(this.windowType, 1);
    };

    MovingCalculation.prototype.addSample = function(value) {
      this.samples.unshift(value);
      if (this.samples.length > this.windowSize) {
        this.samples.pop();
      }
      this.values.push([this.currentDate.clone().unix() * 1000, this.currentValue()]);
      return this.advance();
    };

    MovingCalculation.prototype.currentValue = function() {
      var num, reducer, sum, val;

      reducer = function(memo, cur) {
        return memo + (cur || 0);
      };
      sum = _.reduce(this.samples, reducer, 0);
      num = this.treatNullsAsZero ? this.samples.length : _.compact(this.samples.slice(0)).length;
      val = this.calculation === "average" ? sum / num : sum;
      return (typeof this.transformation === "function" ? this.transformation(val) : void 0) || val;
    };

    return MovingCalculation;

  })();

}).call(this);
