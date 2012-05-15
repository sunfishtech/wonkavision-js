(function() {
  var Filter, Query;
  var __slice = Array.prototype.slice, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Filter = this.Wonkavision.Filter;
  this.Wonkavision.Query = Query = (function() {
    function Query(client, options) {
      var axis, _i, _len, _ref, _this;
      this.client = client;
      if (options == null) {
        options = {};
      }
      _this = this;
      _ref = this.client.axisNames;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        axis = _ref[_i];
        _this[axis] = this.select(axis);
      }
      this.listDelimiter = options.listDelimiter || "|";
      this.axes = [];
      this.filters = [];
      this.selectedMeasures = [];
      this.cubeName = options.cubeName || options.cube;
      this.aggregationName = options.aggregationName || options.aggregation;
    }
    Query.prototype.cube = function(cubeName) {
      this.cubeName = cubeName;
      return this;
    };
    Query.prototype.aggregation = function(aggregationName) {
      this.aggregationName = aggregationName;
      return this;
    };
    Query.prototype.from = function(cubeName, aggregationName) {
      if (aggregationName == null) {
        aggregationName = cubeName;
      }
      this.cubeName = cubeName;
      this.aggregationName = aggregationName;
      return this;
    };
    Query.prototype.measures = function() {
      var measures;
      measures = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.selectedMeasures = this.selectedMeasures.concat(measures);
      return this;
    };
    Query.prototype.where = function(criteria) {
      var filter, value;
      if (criteria == null) {
        criteria = {};
      }
      this.filters = this.filters.concat((function() {
        var _results;
        _results = [];
        for (filter in criteria) {
          value = criteria[filter];
          _results.push(Filter.parse(filter, ".").withValue(value));
        }
        return _results;
      })());
      return this;
    };
    Query.prototype.toParams = function() {
      var axisName, f, query, _i, _len, _ref;
      query = {
        measures: this.selectedMeasures.join(this.listDelimiter),
        filters: ((function() {
          var _i, _len, _ref, _results;
          _ref = this.filters;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            f = _ref[_i];
            _results.push(f.toString());
          }
          return _results;
        }).call(this)).join(this.listDelimiter)
      };
      _ref = this.client.axisNames;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        axisName = _ref[_i];
        if (this.getAxis(axisName)) {
          query[axisName] = this.getAxis(axisName).join(this.listDelimiter);
        }
      }
      return query;
    };
    Query.prototype.toString = function() {
      return toHash().toString();
    };
    Query.prototype.execute = function(options) {
      if (options == null) {
        options = {};
      }
      return this.client.execute(this, options);
    };
    Query.prototype.getAxis = function(axisName) {
      return this.axes[this.client.axisNames.indexOf(axisName)];
    };
    Query.prototype.select = function(axis) {
      return __bind(function() {
        var dimensions, ordinal;
        dimensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        ordinal = this.client.axisNames.indexOf(axis);
        if (ordinal >= 0) {
          if (this.axes.length > ordinal) {
            dimensions = this.axes[ordinal].concat(dimensions);
          }
          this.axes[ordinal] = dimensions;
        }
        return this;
      }, this);
    };
    return Query;
  })();
}).call(this);
