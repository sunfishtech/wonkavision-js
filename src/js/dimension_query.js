(function() {
  var DimensionQuery, Filter, MemberReference,
    __slice = [].slice;

  Filter = this.Wonkavision.Filter;

  MemberReference = this.Wonkavision.MemberReference;

  this.Wonkavision.DimensionQuery = DimensionQuery = (function() {
    function DimensionQuery(client, query) {
      var _this;

      this.client = client;
      if (query == null) {
        query = {};
      }
      _this = this;
      this.listDelimiter = query.listDelimiter || "|";
      this.order_by_attributes = [];
      this.selected_attributes = [];
      this.filters = query.filters || [];
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
      this.originalQuery = query;
    }

    DimensionQuery.prototype.dimension = function(dimName) {
      this.dimensionName = dimName;
      return this;
    };

    DimensionQuery.prototype.from = function(dimName) {
      this.dimensionName = dimName;
      return this;
    };

    DimensionQuery.prototype.where = function(criteria) {
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

    DimensionQuery.prototype.order = function() {
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

    DimensionQuery.prototype.attributes = function() {
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

    DimensionQuery.prototype.toParams = function() {
      var a, f, query;

      query = {
        from: this.dimensionName
      };
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
      query["from"] = this.dimensionName;
      return query;
    };

    DimensionQuery.prototype.toString = function() {
      return toHash().toString();
    };

    DimensionQuery.prototype.execute = function(options) {
      if (options == null) {
        options = {};
      }
      return this.client.executeDimension(this, options);
    };

    return DimensionQuery;

  })();

}).call(this);
