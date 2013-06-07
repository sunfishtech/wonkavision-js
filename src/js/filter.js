(function() {
  var Filter;

  this.Wonkavision.Filter = Filter = (function() {
    function Filter(name, options) {
      this.name = name;
      if (options == null) {
        options = {};
      }
      this.operator = options.operator || "eq";
      this.memberType = options.memberType || "dimension";
      this.value = options.value;
      this.attributeName = options.attributeName || (this.isDimension ? "key" : "count");
      this.operators = ["eq", "ne", "gt", "gte", "lt", "lte", "in", "nin"];
    }

    Filter.prototype.isDimension = function() {
      return this.memberType === "dimension";
    };

    Filter.prototype.isMeasure = function() {
      return this.memberType === "measure";
    };

    Filter.prototype.toString = function() {
      return [this.memberType, this.name, this.attributeName, this.operator, this.value.toString()].join("::");
    };

    Filter.prototype.parse = function(filterString, delim) {
      var parts;

      if (delim == null) {
        delim = "::";
      }
      parts = filterString.split(delim);
      if (parts[0] === "dimension" || parts[0] === "measure" || parts[0] === "fact") {
        this.memberType = parts.shift();
        this.name = parts.shift();
      } else {
        this.name = parts.shift();
      }
      this.attributeName = parts.shift() || this.attributeName;
      this.operator = parts.shift() || this.operator;
      this.value = parts.shift() || this.value;
      return this;
    };

    Filter.prototype.withValue = function(val) {
      this.value = val;
      return this;
    };

    return Filter;

  })();

  this.Wonkavision.Filter.parse = function(filterString, delim) {
    if (delim == null) {
      delim = "::";
    }
    return new Filter("").parse(filterString, delim);
  };

}).call(this);
