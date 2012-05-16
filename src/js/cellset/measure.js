(function() {
  var Measure;
  this.Wonkavision.Measure = Measure = (function() {
    function Measure(data) {
      this.name = data.name;
      this.value = data.value;
      this.formattedValue = data.formatted_value || this.value.toString();
      this.calculated = data.calculated || false;
      this.empty = !this.value;
    }
    Measure.prototype.toString = function() {
      return this.formatted_value;
    };
    return Measure;
  })();
}).call(this);
