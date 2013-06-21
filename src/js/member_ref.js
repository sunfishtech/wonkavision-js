(function() {
  var MemberReference;

  this.Wonkavision.MemberReference = MemberReference = (function() {
    function MemberReference(name, options) {
      this.name = name;
      if (options == null) {
        options = {};
      }
      this.memberType = options.memberType || "dimension";
      this.value = options.value;
      this.attributeName = options.attributeName || (this.isDimension ? "key" : "count");
      this.order = "asc";
    }

    MemberReference.prototype.isDimension = function() {
      return this.memberType === "dimension";
    };

    MemberReference.prototype.isMeasure = function() {
      return this.memberType === "measure";
    };

    MemberReference.prototype.isFact = function() {
      return this.membertype === "fact";
    };

    MemberReference.prototype.toString = function() {
      return [this.memberType, this.name, this.attributeName, this.order].join("::");
    };

    MemberReference.prototype.parse = function(filterString, delim) {
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
      this.order = parts.shift() || this.order;
      return this;
    };

    return MemberReference;

  })();

  this.Wonkavision.MemberReference.parse = function(filterString, delim) {
    if (delim == null) {
      delim = "::";
    }
    return new MemberReference("").parse(filterString, delim);
  };

}).call(this);
