(function() {
  var Measure;

  this.Wonkavision.Measure = Measure = (function() {
    function Measure(data) {
      var _ref;

      this.name = data.name;
      if (data.value != null) {
        this.value = parseFloat(data.value);
      }
      this.formattedValue = data.formatted_value || ((_ref = this.value) != null ? _ref.toString() : void 0);
      this.calculated = data.calculated || false;
      this.empty = !this.value;
    }

    Measure.prototype.toString = function() {
      return this.formatted_value;
    };

    return Measure;

  })();

}).call(this);
