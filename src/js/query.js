(function() {
  var Filter, MemberReference, Query,
    __slice = [].slice;

  Filter = this.Wonkavision.Filter;

  MemberReference = this.Wonkavision.MemberReference;

  this.Wonkavision.Query = Query = (function() {
    function Query(client, query) {
      var axis, _i, _j, _len, _len1, _ref, _ref1, _this;

      this.client = client;
      if (query == null) {
        query = {};
      }
      _this = this;
      _ref = Wonkavision.AXIS_NAMES;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        axis = _ref[_i];
        _this[axis] = this.select(axis);
      }
      this.listDelimiter = query.listDelimiter || "|";
      this.axes = [];
      this.filters = [];
      this.selectedMeasures = [];
      this.order_by_attributes = [];
      this.selected_attributes = [];
      this.topFilter = null;
      _ref1 = Wonkavision.AXIS_NAMES;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        axis = _ref1[_j];
        if (query[axis] != null) {
          this[axis](query[axis]);
        }
      }
      if (query.measures != null) {
        this.measures(query.measures);
      }
      if (query.where != null) {
        this.where(query.where);
      }
      if (query.from != null) {
        this.from(query.from);
      }
      if (query.order != null) {
        this.order(query.order);
      }
      if (query.attributes != null) {
        this.attributes(query.attributes);
      }
      if (query.top != null) {
        this.top(query.top);
      }
      this.originalQuery = query;
    }

    Query.prototype.cube = function(cubeName) {
      this.cubeName = cubeName;
      return this;
    };

    Query.prototype.from = function(cubeName) {
      this.cubeName = cubeName;
      return this;
    };

    Query.prototype.measures = function() {
      var measures;

      measures = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.selectedMeasures = this.selectedMeasures.concat(_.flatten(measures));
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

    Query.prototype.order = function() {
      var attribute, attributes;

      attributes = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.order_by_attributes = this.order_by_attributes.concat((function() {
        var _i, _len, _ref, _results;

        _ref = _.flatten(attributes);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          attribute = _ref[_i];
          _results.push(MemberReference.parse(attribute, "."));
        }
        return _results;
      })());
      return this;
    };

    Query.prototype.attributes = function() {
      var attribute, attributes;

      attributes = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.selected_attributes = this.selected_attributes.concat((function() {
        var _i, _len, _ref, _results;

        _ref = _.flatten(attributes);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          attribute = _ref[_i];
          _results.push(MemberReference.parse(attribute, "."));
        }
        return _results;
      })());
      return this;
    };

    Query.prototype.top = function(topFilter) {
      var filter, value;

      this.topFilter = {};
      this.topFilter.count = topFilter.count;
      this.topFilter.dimension = topFilter.dimension;
      this.topFilter.measure = topFilter.measure;
      this.topFilter.exclude = _.compact(_.flatten([topFilter.exclude]));
      if (topFilter.where) {
        return this.topFilter.filters = (function() {
          var _ref, _results;

          _ref = topFilter.where;
          _results = [];
          for (filter in _ref) {
            value = _ref[filter];
            _results.push(Filter.parse(filter, ".").withValue(value));
          }
          return _results;
        })();
      }
    };

    Query.prototype.toParams = function() {
      var a, axisName, f, query, _i, _len, _ref;

      query = {
        from: this.cubeName
      };
      if (!(this.selectedMeasures.length < 1)) {
        query.measures = this.selectedMeasures.join(this.listDelimiter);
      }
      if (!(this.filters.length < 1)) {
        query.filters = ((function() {
          var _i, _len, _ref, _results;

          _ref = this.filters;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            f = _ref[_i];
            _results.push(f.toString());
          }
          return _results;
        }).call(this)).join(this.listDelimiter);
      }
      if (!(this.order_by_attributes.length < 1)) {
        query.order = ((function() {
          var _i, _len, _ref, _results;

          _ref = this.order_by_attributes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            a = _ref[_i];
            _results.push(a.toString());
          }
          return _results;
        }).call(this)).join(this.listDelimiter);
      }
      if (!(this.selected_attributes.length < 1)) {
        query.attributes = ((function() {
          var _i, _len, _ref, _results;

          _ref = this.selected_attributes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            a = _ref[_i];
            _results.push(a.toString());
          }
          return _results;
        }).call(this)).join(this.listDelimiter);
      }
      _ref = Wonkavision.AXIS_NAMES;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        axisName = _ref[_i];
        if (this.getAxis(axisName)) {
          query[axisName] = this.getAxis(axisName).join(this.listDelimiter);
        }
      }
      if (this.topFilter != null) {
        query["top_filter_count"] = this.topFilter.count;
        query["top_filter_dimension"] = this.topFilter.dimension;
        if (this.topFilter.measure != null) {
          query["top_filter_measure"] = this.topFilter.measure;
        }
        if (this.topFilter.exclude != null) {
          query["top_filter_exclude"] = this.topFilter.exclude.join(this.listDelimiter);
        }
        if (this.topFilter.filters) {
          query["top_filter_filters"] = ((function() {
            var _j, _len1, _ref1, _results;

            _ref1 = this.topFilter.filters;
            _results = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              f = _ref1[_j];
              _results.push(f.toString());
            }
            return _results;
          }).call(this)).join(this.listDelimiter);
        }
      }
      query["from"] = this.cubeName;
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
      return this.axes[Wonkavision.AXIS_NAMES.indexOf(axisName)];
    };

    Query.prototype.select = function(axis) {
      var _this = this;

      return function() {
        var dimensions, ordinal;

        dimensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        ordinal = Wonkavision.AXIS_NAMES.indexOf(axis);
        if (ordinal >= 0) {
          if (_this.axes.length > ordinal) {
            dimensions = _this.axes[ordinal].concat(dimensions);
          }
          _this.axes[ordinal] = _.flatten(dimensions);
        }
        return _this;
      };
    };

    return Query;

  })();

}).call(this);
