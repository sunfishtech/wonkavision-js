/*  wonkavision.js, version 0.0.1

Copyright (c) 2011 [your name here]

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
------------------------------------------------------------------*/
(function() {
  var Wonkavision;

  this.Wonkavision = Wonkavision = (function() {
    var Client;

    function Wonkavision() {}

    Wonkavision.Client = Client = (function() {
      function Client(options) {
        if (options == null) {
          options = {};
        }
        this.url = options.url || "";
        this.facts = {};
        this.aggregations = {};
      }

      Client.prototype.query = function(options) {
        if (options == null) {
          options = {};
        }
        return new Wonkavision.Query(this, options);
      };

      Client.prototype.dimensionQuery = function(options) {
        if (options == null) {
          options = {};
        }
        return new Wonkavision.DimensionQuery(this, options);
      };

      Client.prototype.executeDimension = function(query, options) {
        var error, path, success,
          _this = this;

        success = function(data) {
          var response;

          if (data.json.error != null) {
            optons.error(data.json.error);
          } else {
            response = data.json;
          }
          return options.success(response);
        };
        error = options.error || function() {};
        path = "dimension_query";
        this.get(path, query.toParams(), success, error);
        return this;
      };

      Client.prototype.execute = function(query, options) {
        var error, path, raw, success,
          _this = this;

        raw = options.raw;
        success = function(data) {
          var response;

          if (data.json.error != null) {
            return options.error(data.json.error);
          } else {
            response = raw ? data : options.facts ? data.json.data : new Wonkavision.Cellset(data.json, query);
            return options.success(response);
          }
        };
        error = options.error || function() {};
        path = options.facts ? "facts" : "query";
        this.get(path, query.toParams(), success, error);
        return this;
      };

      Client.prototype.get = function(path, params, success, error) {
        var uri;

        uri = this.url + (this.url.substr(-1) === "/" ? "" : "/");
        uri = uri + path;
        return Wonkavision.Remote.get(uri, {
          data: params,
          success: success,
          error: error
        });
      };

      return Client;

    })();

    return Wonkavision;

  })();

  this.Wonkavision.AXIS_NAMES = ["columns", "rows", "pages", "chapters", "sections"];

}).call(this);

(function() {
  var Wonkavision;

  Wonkavision = this.Wonkavision;

  Wonkavision.Utilities = {
    keyToDate: function(keyStr, unwrap) {
      var date, dateStr;

      if (unwrap == null) {
        unwrap = true;
      }
      keyStr = keyStr.toString().replace("-", "");
      dateStr = "" + keyStr.slice(0, 4) + "-" + (keyStr.slice(4, 6) || '01') + "-" + (keyStr.slice(6, 8) || '01');
      date = moment(dateStr);
      if (unwrap) {
        return date._d;
      } else {
        return date;
      }
    },
    dateToKey: function(date) {
      if (date == null) {
        date = moment();
      }
      return parseInt(moment(date).format("YYYYMMDD"));
    },
    rangeToKeys: function(dateRange) {
      return _.map(dateRange, this.dateToKey);
    },
    beginningOfMonth: function(date) {
      if (date == null) {
        date = new Date();
      }
      return moment(date).startOf('month')._d;
    },
    endOfMonth: function(date) {
      if (date == null) {
        date = new Date();
      }
      return moment(date).endOf('month')._d;
    },
    quarter: function(date) {
      if (date == null) {
        date = new Date();
      }
      return parseInt(moment(date).month() / 3) + 1;
    },
    beginningOfQuarter: function(date) {
      var offset;

      if (date == null) {
        date = new Date();
      }
      date = moment(date);
      offset = date.month() % 3;
      return date.add("months", offset * -1).date(1)._d;
    },
    beginningOfYear: function(date) {
      if (date == null) {
        date = new Date();
      }
      return moment(date).dayOfYear(1)._d;
    },
    dateRange: function(startDate, endDate, toKeys) {
      var range;

      if (toKeys == null) {
        toKeys = false;
      }
      range = [startDate, endDate];
      if (toKeys) {
        return this.rangeToKeys(range);
      } else {
        return range;
      }
    },
    timeWindow: function(startDate, period, windowSize, toKeys) {
      var end, start;

      if (toKeys == null) {
        toKeys = false;
      }
      start = moment(startDate).add(period, windowSize * -1)._d;
      end = moment(startDate);
      return this.dateRange(start, end, toKeys);
    },
    mtd: function(startDate, toKeys) {
      var end, start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = this.beginningOfMonth(startDate);
      end = startDate;
      return this.dateRange(start, end, toKeys);
    },
    ytd: function(startDate, toKeys) {
      var end, start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = this.beginningOfYear(startDate);
      end = startDate;
      return this.dateRange(start, end, toKeys);
    },
    qtd: function(startDate, toKeys) {
      var end, start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = this.beginningOfQuarter(startDate);
      end = startDate;
      return this.dateRange(start, end, toKeys);
    },
    lastMonth: function(startDate, toKeys) {
      var start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = moment(start).add("months", -1);
      return this.dateRange(this.beginningOfMonth(start), this.endOfMonth(start), toKeys);
    },
    smoothSeries: function(points, opts) {
      var calc,
        _this = this;

      if (opts == null) {
        opts = {};
      }
      _.defaults(opts, {
        windowSize: 30,
        windowType: "days",
        calculation: "average",
        transformation: function(val) {
          return val;
        }
      });
      calc = new Wonkavision.MovingCalculation(opts);
      _.each(points, function(point) {
        return calc.add(point.x, point.y);
      });
      return _.map(calc.values.slice(opts.windowSize), function(point) {
        return {
          x: point[0],
          y: point[1]
        };
      });
    },
    sortRows: function(cellset, options) {
      var columnKey, dir, measureName;

      if (options == null) {
        options = {};
      }
      measureName = options["measureName"] || cellset.measureNames[0];
      columnKey = options["columnKey"] || null;
      dir = options["direction"] || 1;
      return cellset.rows.dimensions[0].sortBy(function(m) {
        var _ref, _ref1;

        return (((_ref = cellset.cell(columnKey, m.key)) != null ? (_ref1 = _ref.measures[measureName]) != null ? _ref1.value : void 0 : void 0) || 0) * dir;
      });
    }
  };

}).call(this);

(function() {
  var Remote;

  this.Wonkavision.Remote = Remote = (function() {
    function Remote(options) {
      if (options == null) {
        options = {};
      }
    }

    Remote.prototype.xhr = function(options) {
      var settings, url;

      url = options.url;
      settings = this.createSettings(url, options);
      settings.ajax = settings.xhr();
      if (settings.ajax) {
        this.prepareUrl(settings);
        settings.ajax.open(settings.type, settings.url, settings.async);
        settings.ajax.setRequestHeader("Accept", "application/json");
        settings.ajax.send(settings.data || null);
        return this.httpData(settings);
      }
    };

    Remote.prototype.prepareUrl = function(settings) {
      if (settings.type === "GET" && settings.data) {
        settings.url += /\?/.test(settings.url) ? "&" : "?";
        settings.url += this.toParams(settings.data);
        return settings.data = null;
      }
    };

    Remote.prototype.createSettings = function(url, options) {
      if (options == null) {
        options = {};
      }
      return {
        url: url,
        data: options.data || "",
        success: options.success || function() {},
        error: options.error || function() {},
        type: options.type || "GET",
        async: options.async || true,
        xhr: function() {
          return new window.XMLHttpRequest();
        }
      };
    };

    Remote.prototype.toParams = function(data) {
      var name, parts, value;

      if (data == null) {
        data = {};
      }
      parts = [];
      for (name in data) {
        value = data[name];
        parts.push("" + name + "=" + value);
      }
      return encodeURI(parts.join("&"));
    };

    Remote.prototype.httpData = function(settings) {
      return settings.ajax.onreadystatechange = function() {
        var data, error, json;

        if (settings.ajax.readyState === 4) {
          try {
            json = JSON.parse(settings.ajax.responseText);
          } catch (_error) {
            error = _error;
            console.log("Could not parse response (" + settings.ajax.responseText + ") as JSON:" + error);
          }
          data = {
            xml: settings.ajax.responseXML,
            text: settings.ajax.responseText,
            json: json
          };
          if (/(2..)/.test(settings.ajax.status)) {
            settings.success.call(settings.ajax, data);
          } else {
            console.log("There was an error processing a Wonkavision data request:" + settings.ajax.statusText);
            if (settings.error) {
              settings.error.call(null, settings.ajax.statusText);
            }
          }
          return data;
        } else {
          return null;
        }
      };
    };

    return Remote;

  })();

  this.Wonkavision.Remote.ajax = function(options) {
    return new Remote().xhr(options);
  };

  this.Wonkavision.Remote.get = function(url, options) {
    options.url = url;
    return new Remote().xhr(options);
  };

  this.Wonkavision.Remote.post = function(url, options) {
    options.url = url;
    options.type = "POST";
    return new Remote().xhr(options);
  };

}).call(this);

(function() {
  var Filter,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Wonkavision.Filter = Filter = (function() {
    function Filter(name, options) {
      this.name = name;
      if (options == null) {
        options = {};
      }
      this.isFact = __bind(this.isFact, this);
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

    Filter.prototype.isFact = function() {
      return this.memberType === "fact";
    };

    Filter.prototype.toString = function() {
      if (this.value === null) {
        this.value = "";
      }
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
      this.filters = query.filters || [];
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
      this.includeTotals = !!query.includeTotals;
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

(function() {
  var Axis, ChartCell, ChartTable, DataTable, MeasureMember, Member, MemberCollection, PivotTable, TableCell, TableRow,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Wonkavision.PivotTable = PivotTable = (function() {
    function PivotTable(cellset, options) {
      var axis, cell, key, sc, skey, _base, _i, _len, _ref, _ref1, _ref2,
        _this = this;

      this.cellset = cellset;
      if (options == null) {
        options = {};
      }
      this.axes = _.map(this.cellset.axes, function(axis) {
        return _this[axis.name] = new PivotTable.Axis(axis.name, axis.dimensions.slice(0), _this);
      });
      this.measuresAxis = options.measuresAxis || options.measuresOn;
      this.measuresAxis || (this.measuresAxis = this.isFlat ? "rows" : "columns");
      this.initializeAxes();
      this.seriesCells = {};
      this.isFlat = this.axes.length < 2 ? true : false;
      _ref = this.cellset.cells;
      for (key in _ref) {
        cell = _ref[key];
        _ref1 = this.axes;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          axis = _ref1[_i];
          axis.registerCell(cell);
        }
        if (this.seriesDimension != null) {
          skey = cell.key[this.seriesDimension.keyIndex];
          sc = ((_base = this.seriesCells)[skey] || (_base[skey] = []));
          sc.push(cell);
        }
      }
      if (this.measuresAxis != null) {
        if ((_ref2 = this[this.measuresAxis]) != null) {
          _ref2.appendMeasures();
        }
      }
    }

    PivotTable.prototype.initializeAxes = function() {
      var axis, _i, _len, _ref, _results;

      _ref = this.axes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        axis = _ref[_i];
        _results.push(axis.initialize());
      }
      return _results;
    };

    PivotTable.prototype.pivot = function() {
      var r;

      r = this.rows;
      this.rows = this.columns;
      return this.columns = r;
    };

    PivotTable.prototype.createDataTable = function() {
      return new DataTable(this);
    };

    PivotTable.prototype.createCell = function(row, keyMembers, measureName) {
      if (measureName == null) {
        measureName = null;
      }
      return new TableCell(row, keyMembers, measureName);
    };

    return PivotTable;

  })();

  this.Wonkavision.ChartTable = ChartTable = (function(_super) {
    __extends(ChartTable, _super);

    function ChartTable(cellset, options) {
      if (options == null) {
        options = {};
      }
      this.seriesSource = options.seriesSource || options.seriesFrom || (cellset.measureNames.length > 1 ? "measures" : "rows");
      ChartTable.__super__.constructor.call(this, cellset, options);
    }

    ChartTable.prototype.initializeAxes = function() {
      this.xAxisDimension = this.columns.dimensions.pop();
      this.seriesDimension = this.seriesSource !== "measures" && (this[this.seriesSource] != null) ? this[this.seriesSource].dimensions.pop() : void 0;
      if (this.seriesSource === "measures") {
        this.measuresAxis = null;
      }
      return ChartTable.__super__.initializeAxes.call(this);
    };

    ChartTable.prototype.createCell = function(row, keyMembers, measureName) {
      return new ChartCell(row, keyMembers);
    };

    return ChartTable;

  })(PivotTable);

  this.Wonkavision.PivotTable.DataTable = DataTable = (function() {
    function DataTable(pivot) {
      var _ref, _ref1,
        _this = this;

      this.pivot = pivot;
      this.rowMembers = (_ref = this.pivot.rows) != null ? _ref.members.nonEmpty().partitionH() : void 0;
      this.columnMembers = (_ref1 = this.pivot.columns) != null ? _ref1.members.nonEmpty().partitionV() : void 0;
      this.rows = [];
      _.map(this.rowMembers, function(rm) {
        return _this.addRow(rm);
      });
    }

    DataTable.prototype.addRow = function(rowMember) {
      return this.rows.push(this.createRow(rowMember));
    };

    DataTable.prototype.createRow = function(rowMemberOrMembers) {
      return new TableRow(this, rowMemberOrMembers);
    };

    return DataTable;

  })();

  this.Wonkavision.PivotTable.TableRow = TableRow = (function() {
    function TableRow(table, rowMembers) {
      var _this = this;

      this.table = table;
      this.rowMembers = rowMembers;
      this.pivot = this.table.pivot;
      this.cells = [];
      this.rowMember = _.isArray(this.rowMembers) ? _.last(this.rowMembers) : this.rowMembers;
      this.totalsRow = !!_.detect(this.rowMember, function(m) {
        return m != null ? m.totals : void 0;
      });
      if (this.pivot.isFlat && this.pivot.measuresAxis === "rows") {
        _.map(this.pivot.cellset.measureNames, function(m) {
          return _this.addCell([_this.rowMember], m);
        });
      } else if (this.pivot.columns && !this.pivot.columns.isEmpty) {
        _.map(this.pivot.columns.members.nonEmpty().leaves(), function(colMember) {
          return _this.addCell([_this.rowMember, colMember]);
        });
      } else {
        [this.addCell([this.rowMember])];
      }
    }

    TableRow.prototype.addCell = function(keyMembers, measureName) {
      return this.cells.push(this.pivot.createCell(this, keyMembers, measureName));
    };

    return TableRow;

  })();

  this.Wonkavision.PivotTable.TableCell = TableCell = (function() {
    function TableCell(row, keyMembers, measureName) {
      var _ref, _ref1, _ref2;

      this.row = row;
      this.measureName = measureName;
      this.keyMembers = keyMembers.slice(0);
      this.pivot = this.row.pivot;
      this.cell = this.cellFor(this.keyMembers);
      this.measureName || (this.measureName = this.findMeasureName(this.keyMembers));
      this.measure = (_ref = this.cell) != null ? _ref[this.measureName] : void 0;
      this.value = (_ref1 = this.measure) != null ? _ref1.value : void 0;
      this.formattedValue = (_ref2 = this.measure) != null ? _ref2.formattedValue : void 0;
      this.totalsCell = !!_.detect(this.keyMembers, function(m) {
        return m != null ? m.totals : void 0;
      });
    }

    TableCell.prototype.cellFor = function(keyMembers) {
      var cellKey;

      cellKey = _.flatten(_.map(_.sortBy(_.compact(keyMembers), function(m) {
        return m.keyIndex;
      }), function(m) {
        return m.cellKey();
      }));
      return this.pivot.cellset.cells[cellKey];
    };

    TableCell.prototype.findMeasureName = function(keyMembers) {
      var _ref;

      return ((_ref = _.find(keyMembers, function(m) {
        return (m != null ? m.measureName : void 0) != null;
      })) != null ? _ref.measureName : void 0) || this.pivot.cellset.measureNames[0];
    };

    return TableCell;

  })();

  this.Wonkavision.PivotTable.ChartCell = ChartCell = (function() {
    function ChartCell(row, keyMembers) {
      var seriesMembers,
        _this = this;

      this.row = row;
      this.keyMembers = keyMembers;
      this.pivot = this.row.pivot;
      if (this.pivot.seriesSource === "measures") {
        this.series = _.map(this.pivot.cellset.measureNames, function(measureName) {
          return {
            name: measureName,
            data: _this.seriesFromMeasure(keyMembers, measureName)
          };
        });
      } else if (this.pivot.seriesDimension != null) {
        seriesMembers = _.filter(this.pivot.seriesDimension.members, function(m) {
          return _this.pivot.seriesCells[m.key] != null;
        });
        this.series = _.map(seriesMembers, function(seriesMember) {
          return {
            name: seriesMember.caption,
            data: _this.seriesFromMember(keyMembers, seriesMember)
          };
        });
      }
    }

    ChartCell.prototype.seriesFromMeasure = function(keyMembers, measureName) {
      var members,
        _this = this;

      members = _.select(this.pivot.xAxisDimension.members, function(m) {
        return m.key != null;
      });
      return _.map(members, function(x) {
        var key, pivotMember, xMember;

        xMember = Member.fromDimensionMember(x);
        pivotMember = new MeasureMember(measureName, xMember);
        key = keyMembers.concat([pivotMember]);
        return {
          x: x.key,
          y: new TableCell(_this.row, key, measureName).value
        };
      });
    };

    ChartCell.prototype.seriesFromMember = function(keyMembers, member) {
      var members, pivotMember,
        _this = this;

      pivotMember = Member.fromDimensionMember(member);
      members = _.select(this.pivot.xAxisDimension.members, function(m) {
        return m.key != null;
      });
      return _.map(members, function(x) {
        var key, xMember;

        xMember = Member.fromDimensionMember(x);
        key = keyMembers.concat([pivotMember, xMember]);
        return {
          x: x.key,
          y: new TableCell(_this.row, key).value
        };
      });
    };

    return ChartCell;

  })();

  this.Wonkavision.PivotTable.Axis = Axis = (function() {
    function Axis(name, dimensions, pivotTable) {
      this.name = name;
      this.dimensions = dimensions;
      this.pivotTable = pivotTable;
      this.members = new MemberCollection();
    }

    Axis.prototype.initialize = function() {
      if (!(this.isEmpty = this.dimensions.length < 1)) {
        this.startIndex = this.dimensions[0].keyIndex;
        this.endIndex = this.startIndex + this.dimensions.length - 1;
        return this.initLevels();
      }
    };

    Axis.prototype.initLevels = function(key, parent) {
      var childKey, depth, level, member, _i, _len, _ref, _results;

      if (key == null) {
        key = [];
      }
      if (parent == null) {
        parent = this;
      }
      depth = key.length;
      if (depth < this.dimensions.length) {
        _ref = this.dimensions[depth].members;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          member = _ref[_i];
          member.isEmpty = true;
          childKey = key.slice(0);
          childKey.push(member.key);
          level = parent.members.push(new Member(childKey, parent, depth + this.startIndex, member));
          _results.push(this.initLevels(childKey, level));
        }
        return _results;
      }
    };

    Axis.prototype.registerCell = function(cell) {
      var level, levelKey;

      if (!(cell.empty || this.isEmpty || cell.key.length <= this.startIndex)) {
        levelKey = cell.key.slice(this.startIndex, +this.startIndex + 1 || 9e9);
        level = this.members.get(levelKey);
        if (level) {
          return level.registerCell(cell);
        }
      }
    };

    Axis.prototype.appendMeasures = function() {
      return this.members.appendMeasures(this.pivotTable.cellset);
    };

    return Axis;

  })();

  this.Wonkavision.PivotTable.Member = Member = (function() {
    function Member(key, parent, keyIndex, member) {
      var _ref;

      this.parent = parent;
      this.keyIndex = keyIndex;
      this.member = member;
      this.key = key;
      this.axis = ((_ref = this.parent) != null ? _ref.axis : void 0) != null ? this.parent.axis : this.parent;
      this.caption = this.member.caption;
      this.depth = this.axis ? this.keyIndex - this.axis.startIndex : 0;
      this.isEmpty = true;
      this.isLeaf = this.axis ? this.keyIndex === this.axis.endIndex : 0;
      if (!this.isLeaf) {
        this.members = new MemberCollection();
      }
      this.totals = this.member.totals;
    }

    Member.prototype.cellKey = function() {
      return this.key;
    };

    Member.prototype.leaves = function(nonEmpty) {
      if (nonEmpty == null) {
        nonEmpty = false;
      }
      if (this.isLeaf) {
        return [this];
      } else {
        return this.members.leaves(nonEmpty);
      }
    };

    Member.prototype.registerCell = function(cell) {
      var child, childIndex, childKey;

      this.isEmpty = false;
      this.member.isEmpty = false;
      if (!this.isLeaf) {
        childIndex = this.keyIndex + 1;
        childKey = cell.key.slice(this.axis.startIndex, +childIndex + 1 || 9e9);
        child = this.members.get(childKey);
        if (child) {
          return child.registerCell(cell);
        }
      }
    };

    return Member;

  })();

  this.Wonkavision.PivotTable.Member.fromDimensionMember = function(member) {
    return new Member([member.key], null, member.dimension.keyIndex, member);
  };

  this.Wonkavision.PivotTable.MeasureMember = MeasureMember = (function(_super) {
    __extends(MeasureMember, _super);

    function MeasureMember(measureName, parentMember) {
      this.measureName = measureName;
      this.key = parentMember.key.concat(["@" + measureName]);
      this.parent = parentMember;
      this.axis = parentMember.axis;
      this.caption = measureName;
      this.depth = parentMember.depth + 1;
      this.isEmpty = parentMember.isEmpty;
      this.isLeaf = true;
      parentMember.isLeaf = false;
      this.isMeasure = true;
      this.keyIndex = parentMember.keyIndex;
      this.member = parentMember.member;
      this.totals = this.member.totals;
    }

    MeasureMember.prototype.cellKey = function() {
      return this.key.slice(0, -1);
    };

    return MeasureMember;

  })(Member);

  this.Wonkavision.PivotTable.MemberCollection = MemberCollection = (function() {
    function MemberCollection(members, isNonEmpty) {
      var _this = this;

      if (members == null) {
        members = [];
      }
      this.isNonEmpty = isNonEmpty != null ? isNonEmpty : false;
      this.members = [];
      this.length = 0;
      _.each(members, function(level) {
        return _this.push(level);
      });
    }

    MemberCollection.prototype.get = function(key) {
      var _this = this;

      return _.find(this.members, function(l) {
        return _this.compareKeys(l.key, key);
      });
    };

    MemberCollection.prototype.compareKeys = function(left, right) {
      return left.toString() === right.toString();
    };

    MemberCollection.prototype.push = function(level) {
      this.invalidateCache();
      this.length += 1;
      this.members.push(level);
      return level;
    };

    MemberCollection.prototype.each = function(callback) {
      return _.each(this.members, callback);
    };

    MemberCollection.prototype.map = function(callback) {
      return _.each(this.members, callback);
    };

    MemberCollection.prototype.nonEmpty = function() {
      return new MemberCollection(_.filter(this.members, function(level) {
        return !level.isEmpty;
      }), true);
    };

    MemberCollection.prototype.leaves = function(nonEmpty) {
      var members;

      if (nonEmpty == null) {
        nonEmpty = this.isNonEmpty;
      }
      if (this.leafCache == null) {
        members = nonEmpty ? this.nonEmpty().members : this.members;
        this.leafCache = _.flatten(_.map(members, function(level) {
          return level.leaves(nonEmpty);
        }));
      }
      return this.leafCache;
    };

    MemberCollection.prototype.at = function(idx) {
      return this.members[idx];
    };

    MemberCollection.prototype.toArray = function() {
      return this.members;
    };

    MemberCollection.prototype.flatten = function(nonEmpty, members) {
      if (members == null) {
        members = [];
      }
      if (nonEmpty == null) {
        nonEmpty = this.isNonEmpty;
      }
      this.map(function(level) {
        if (!(nonEmpty && level.isEmpty)) {
          members.push(level);
          if (!level.isLeaf) {
            return level.members.flatten(nonEmpty, members);
          }
        }
      });
      return members;
    };

    MemberCollection.prototype.partitionH = function(nonEmpty) {
      var members, reducer;

      if (nonEmpty == null) {
        nonEmpty = this.isNonEmpty;
      }
      members = this.flatten(nonEmpty);
      reducer = function(memo, level) {
        var curpart, lastlevel;

        curpart = _.last(memo);
        lastlevel = _.last(curpart);
        if (!(lastlevel && lastlevel.depth >= level.depth)) {
          curpart.push(level);
        } else {
          memo.push([level]);
        }
        return memo;
      };
      return _.reduce(members, reducer, [[]]);
    };

    MemberCollection.prototype.partitionV = function(nonEmpty) {
      var members, reducer;

      if (nonEmpty == null) {
        nonEmpty = this.isNonEmpty;
      }
      members = this.flatten(nonEmpty);
      reducer = function(memo, level) {
        var group, _name;

        group = (memo[_name = level.depth] || (memo[_name] = []));
        group.push(level);
        return memo;
      };
      return _.reduce(members, reducer, []);
    };

    MemberCollection.prototype.appendMeasures = function(cellset) {
      var measureNames, prevLeaves;

      measureNames = cellset.measureNames;
      prevLeaves = this.leaves();
      _.each(prevLeaves, function(pLeaf) {
        return pLeaf.members = new MemberCollection(_.map(measureNames, function(mname) {
          return new MeasureMember(mname, pLeaf);
        }));
      });
      return this.invalidateCache(true);
    };

    MemberCollection.prototype.invalidateCache = function(recursive) {
      if (recursive == null) {
        recursive = false;
      }
      this.leafCache = null;
      if (recursive) {
        return this.each(function(l) {
          if (l.members != null) {
            return l.members.invalidateCache();
          }
        });
      }
    };

    return MemberCollection;

  })();

}).call(this);

(function() {
  var Member;

  this.Wonkavision.Member = Member = (function() {
    function Member(dimension, data) {
      this.dimension = dimension;
      this.key = data.key;
      this.caption = data.caption || this.key;
      this.sort = data.sort || this.caption;
      this.attributes = data.attributes || {};
      this.totals = !!data.totals;
    }

    Member.prototype.toString = function() {
      return (typeof key !== "undefined" && key !== null ? key.toString() : void 0) || "<null>";
    };

    Member.prototype.toKey = function() {
      return key;
    };

    return Member;

  })();

}).call(this);

(function() {
  var Dimension, Member;

  Member = this.Wonkavision.Member;

  this.Wonkavision.Dimension = Dimension = (function() {
    function Dimension(axis, data, keyIndex) {
      var _this = this;

      this.axis = axis;
      this.keyIndex = keyIndex;
      this.name = data.name;
      this.members = _.sortBy(_.map(data.members, function(mem) {
        return new Member(_this, mem);
      }), function(member) {
        return member.sort;
      });
      if (this.axis.cellset.includeTotals) {
        this.members.push(this.createTotalMember());
      }
    }

    Dimension.prototype.rawMembers = function() {
      if (this.axis.cellset.includeTotals) {
        return this.members.slice(0, this.members.length - 1);
      } else {
        return this.members;
      }
    };

    Dimension.prototype.sortBy = function(sortFunc, excludeTotals) {
      if (excludeTotals == null) {
        excludeTotals = true;
      }
      if (excludeTotals) {
        this.members = this.rawMembers();
        this.members = _.sortBy(this.members, sortFunc);
        if (this.axis.cellset.includeTotals) {
          return this.members.push(this.createTotalMember());
        }
      } else {
        return this.members = _.sortBy(this.members, sortFunc);
      }
    };

    Dimension.prototype.createTotalMember = function() {
      return new Member(this, {
        key: null,
        caption: "" + this.name + "_total",
        totals: true
      });
    };

    return Dimension;

  })();

}).call(this);

(function() {
  var Axis, Dimension;

  Dimension = this.Wonkavision.Dimension;

  this.Wonkavision.Axis = Axis = (function() {
    function Axis(name, cellset, data, startIndex) {
      var dimension, idx, _i, _len, _ref;

      this.name = name;
      this.cellset = cellset;
      this.startIndex = startIndex;
      this.dimensions = [];
      this.dimensionNames = [];
      _ref = data.dimensions;
      for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
        dimension = _ref[idx];
        this.dimensions.push(new Dimension(this, dimension, this.startIndex + idx));
        this.dimensionNames.push(dimension.name);
      }
      this.endIndex = this.startIndex + this.dimensions.length - 1;
    }

    return Axis;

  })();

}).call(this);

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

(function() {
  var Cell, Filter, Measure;

  Measure = this.Wonkavision.Measure;

  Filter = this.Wonkavision.Filter;

  this.Wonkavision.Cell = Cell = (function() {
    function Cell(cellset, data) {
      var measure, _i, _len, _ref,
        _this = this;

      this.cellset = cellset;
      this.measures = {};
      this.dimensions = [];
      this.filters = [];
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
        this.dimensions = data.dimensions || [];
        this.filters = _.map(this.dimensions, function(dim, idx) {
          return new Filter(dim, {
            value: _.compact(_this.key)[idx]
          });
        });
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

(function() {
  var Axis, Cell, Cellset, Filter;

  Cell = this.Wonkavision.Cell;

  Axis = this.Wonkavision.Axis;

  Filter = this.Wonkavision.Filter;

  this.Wonkavision.Cellset = Cellset = (function() {
    function Cellset(data, query) {
      var a, axis, c, cell, f, filters, i, index, name, slicer, _i, _j, _len, _len1, _ref, _ref1, _ref2;

      if (data == null) {
        data = {};
      }
      this.query = query != null ? query : null;
      this.cube = data.cube || null;
      this.includeTotals = !!((_ref = this.query) != null ? _ref.includeTotals : void 0);
      slicer = data.slicer || [];
      filters = data.filters || [];
      this.slicer = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = slicer.length; _i < _len; _i++) {
          f = slicer[_i];
          _results.push(Filter.parse(f));
        }
        return _results;
      })();
      this.filters = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = filters.length; _i < _len; _i++) {
          f = filters[_i];
          _results.push(Filter.parse(f));
        }
        return _results;
      })();
      this.measureNames = data.measure_names || [];
      this.levelCount = 0;
      this.axes = (function() {
        var _i, _ref1, _results;

        _results = [];
        for (i = _i = 0, _ref1 = data.axes.length; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
          axis = data.axes[i];
          name = Wonkavision.AXIS_NAMES[i];
          a = new Axis(name, this, axis, this.levelCount);
          this.levelCount = a.endIndex + 1;
          _results.push(a);
        }
        return _results;
      }).call(this);
      this.cells = {};
      this.totals = new Cell(this, data.totals);
      this.cells[this.totals.key] = this.totals;
      _ref1 = data.cells || [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        cell = _ref1[_i];
        c = new Cell(this, cell);
        this.cells[c.key] = c;
      }
      _ref2 = Wonkavision.AXIS_NAMES;
      for (index = _j = 0, _len1 = _ref2.length; _j < _len1; index = ++_j) {
        axis = _ref2[index];
        this[axis] = this.axes[index];
      }
    }

    Cellset.prototype.cell = function() {
      var coord, coords;

      coords = (function() {
        var _i, _len, _results;

        if (typeof coord !== "undefined" && coord !== null) {
          return coord.toString();
        } else {
          _results = [];
          for (_i = 0, _len = arguments.length; _i < _len; _i++) {
            coord = arguments[_i];
            _results.push(coord);
          }
          return _results;
        }
      }).apply(this, arguments);
      return this.cells[coords] || new Cell(this);
    };

    return Cellset;

  })();

}).call(this);

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

(function() {
  var RickshawRenderer, _base;

  RickshawRenderer = (function() {
    function RickshawRenderer(options) {
      this.extractArgs(options);
      this.palette = new Rickshaw.Color.Palette({
        scheme: this.colorScheme
      });
    }

    RickshawRenderer.prototype.renderGraph = function(data, container) {
      var chart, graph, hoverDetail, series, x_axis, yAxis, y_axis,
        _this = this;

      series = _.map(data, function(series) {
        return {
          name: series.name,
          color: _this.colorFor(series.name),
          data: series.data
        };
      });
      chart = container.append("div").attr("class", "wv-chart");
      yAxis = container.append("div").attr("class", "wv-y-axis");
      graph = new Rickshaw.Graph(_.extend(this.graphArgs, {
        element: chart[0][0],
        series: series
      }));
      x_axis = new Rickshaw.Graph.Axis.Time(_.extend(this.xAxisArgs, {
        graph: graph
      }));
      y_axis = new Rickshaw.Graph.Axis.Y(_.extend(this.yAxisArgs, {
        graph: graph,
        element: yAxis[0][0]
      }));
      hoverDetail = new Rickshaw.Graph.HoverDetail(_.extend(this.hoverArgs, {
        graph: graph
      }));
      return graph.render();
    };

    RickshawRenderer.prototype.colorFor = function(seriesName) {
      var _base;

      this.colorCache || (this.colorCache = {});
      return (_base = this.colorCache)[seriesName] || (_base[seriesName] = this.palette.color());
    };

    RickshawRenderer.prototype.extractArgs = function(args) {
      this.colorScheme = args.palette || args.colorScheme || this.colorScheme || "munin";
      this.graphArgs = _.defaults(args.graph || {}, {
        width: 300,
        height: 300,
        renderer: 'line'
      });
      this.xAxisArgs = args.xAxis || {};
      this.yAxisArgs = _.defaults(args.yAxis || {}, {
        orientation: 'left',
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT
      });
      return this.hoverArgs = args.hover || {};
    };

    return RickshawRenderer;

  })();

  (_base = this.Wonkavision).renderers || (_base.renderers = {});

  this.Wonkavision.renderers.Rickshaw = RickshawRenderer;

}).call(this);

(function() {
  var HighchartsRenderer, _base;

  HighchartsRenderer = (function() {
    function HighchartsRenderer(options) {
      this.extractArgs(options);
    }

    HighchartsRenderer.prototype.renderGraph = function(data, container) {
      var chart, chartArgs, hc, series;

      series = data;
      chart = container.append("div").attr("class", "wv-chart");
      chartArgs = _.extend(this.chartArgs, {
        series: series,
        chart: _.extend(this.chartArgs.chart, {
          renderTo: chart[0][0]
        })
      });
      return hc = new Highcharts.Chart(chartArgs);
    };

    HighchartsRenderer.prototype.extractArgs = function(args) {
      var _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;

      this.chartArgs = args.highchart || {};
      this.chartArgs.chart = _.defaults(this.chartArgs.chart || {}, {
        borderColor: "#CCC",
        type: "line",
        backgroundColor: "white",
        spacingBottom: 10,
        spacingTop: 10
      });
      this.chartArgs.tooltip = _.defaults(this.chartArgs.tooltip || {}, {
        shared: true
      });
      this.chartArgs.plotOptions = _.extend(this.chartArgs.plotOptions || {}, {
        series: _.defaults(((_ref = this.chartArgs.plotOptions) != null ? _ref.series : void 0) || {}, {
          animation: false
        }),
        line: _.defaults(((_ref1 = this.chartArgs.plotOptions) != null ? _ref1.line : void 0) || {}, {
          marker: _.defaults(((_ref2 = this.chartArgs.plotOptions) != null ? (_ref3 = _ref2.line) != null ? _ref3.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        }),
        column: _.defaults(((_ref4 = this.chartArgs.plotOptions) != null ? _ref4.column : void 0) || {}, {
          shadow: false
        }),
        bar: _.defaults(((_ref5 = this.chartArgs.plotOptions) != null ? _ref5.bar : void 0) || {}, {
          shadow: false
        }),
        spline: _.defaults(((_ref6 = this.chartArgs.plotOptions) != null ? _ref6.spline : void 0) || {}, {
          marker: _.defaults(((_ref7 = this.chartArgs.plotOptions) != null ? (_ref8 = _ref7.spline) != null ? _ref8.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        }),
        area: _.defaults(((_ref9 = this.chartArgs.plotOptions) != null ? _ref9.area : void 0) || {}, {
          marker: _.defaults(((_ref10 = this.chartArgs.plotOptions) != null ? (_ref11 = _ref10.area) != null ? _ref11.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        }),
        areaspline: _.defaults(((_ref12 = this.chartArgs.plotOptions) != null ? _ref12.areaspline : void 0) || {}, {
          marker: _.defaults(((_ref13 = this.chartArgs.plotOptions) != null ? (_ref14 = _ref13.areaspline) != null ? _ref14.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        })
      });
      this.chartArgs.xAxis = _.defaults(this.chartArgs.xAxis || {}, {
        type: 'datetime'
      });
      return this.chartArgs.yAxis = _.defaults(this.chartArgs.yAxis || {}, {
        endOnTick: false
      });
    };

    return HighchartsRenderer;

  })();

  (_base = this.Wonkavision).renderers || (_base.renderers = {});

  this.Wonkavision.renderers.Highcharts = HighchartsRenderer;

}).call(this);

(function() {
  var PivotTableView, Utilities;

  Utilities = this.Wonkavision.Utilities;

  this.Wonkavision.PivotTableView = PivotTableView = (function() {
    function PivotTableView(options) {
      _.bindAll(this, "render", "renderTable", "renderColumnHeaders", "renderTableData");
      this.extractArgs(options);
    }

    PivotTableView.prototype.render = function(args) {
      this.extractArgs(args);
      if (this.viewType === "text") {
        this.pivot = new Wonkavision.PivotTable(this.data, args);
      } else {
        this.pivot = new Wonkavision.ChartTable(this.data, args);
      }
      if (this.pivot.isFlat && this.viewType === "text") {
        this.pivot.pivot();
      }
      this.dataTable = this.pivot.createDataTable();
      if (this.suppressMeasureHeaders == null) {
        this.suppressMeasureHeaders = this.pivot.cellset.measureNames.length < 2;
      }
      return this.element.append("table").attr("class", "wv-pivot-table").call(this.renderTable);
    };

    PivotTableView.prototype.extractArgs = function(args) {
      if (args.data) {
        this.data = args.data;
      }
      if (args.element) {
        this.element = d3.selectAll(args.element);
      }
      this.viewType = args.viewType || args.view || this.detectViewType(args);
      this.renderer = this.viewType === "text" ? args.cellRenderer : this.createRenderer(args);
      this.formatLabel = args.formatLabel || function(l) {
        return l;
      };
      this.formatData = args.formatData || (function(d) {
        if (d.formattedValue != null) {
          return d.formattedValue;
        } else {
          return "-";
        }
      });
      this.smooth = args.smooth;
      if (this.smooth) {
        this.smoothingMethod = args.smoothingMethod;
        this.smoothingWindow = args.smoothingWindow || 30;
        this.smoothingPeriod = args.smoothingPeriod || "days";
        this.smoothingTransformation = args.smoothingTransformation || null;
        this.smoothingTreatNullsAsZero = args.smoothingTreatNullsAsZero != null ? args.smoothingTreatNullsAsZero : true;
      }
      this.suppressMeasureHeaders = args.suppressMeasureHeaders;
      this.suppressAllHeaders = args.suppressAllHeaders;
      return this.seriesTransformation = args.seriesTransformation;
    };

    PivotTableView.prototype.createRenderer = function(args) {
      var rendererClass;

      rendererClass = args.renderer || Wonkavision.renderers["default"] || Wonkavision.renderers.Rickshaw;
      return new rendererClass(args);
    };

    PivotTableView.prototype.memberSpan = function(member) {
      var _ref;

      return (_ref = member.members) != null ? _ref.nonEmpty().leaves().length : void 0;
    };

    PivotTableView.prototype.renderTable = function(tableSelection) {
      this.dataRows = [];
      this.table = tableSelection;
      this.table.call(this.renderColumnHeaders);
      return this.table.call(this.renderTableData);
    };

    PivotTableView.prototype.renderColumnHeaders = function(tableSelection) {
      var ch, chr, colMembers, colnames, fillSpan, hrow, thead,
        _this = this;

      if (this.pivot.isFlat && this.pivot.measuresAxis === "rows") {
        colnames = _.map(this.pivot.axes[0].dimensions, function(dim) {
          return dim.name;
        });
        colnames = colnames.concat(this.pivot.cellset.measureNames);
        thead = tableSelection.append("thead");
        hrow = thead.append("tr").classed("wv-col", true);
        return hrow.selectAll("th.wv-col-header").data(colnames).enter().append("th").text(function(name) {
          return _this.formatLabel(name);
        });
      } else {
        colMembers = this.dataTable.columnMembers;
        thead = tableSelection.append("thead");
        chr = thead.selectAll("tr.wv-col").data(this.filterColHeaders(colMembers)).enter().append("tr").attr("class", "wv-col");
        fillSpan = this.pivot.rows.dimensions.length + (this.pivot.measuresAxis === "rows" && !this.suppressMeasureHeaders ? 1 : 0);
        chr.append("th").attr("colspan", fillSpan);
        return ch = chr.selectAll("th.wv-col-header").data((function(d) {
          return d;
        }), function(d) {
          return d.key.toString();
        }).enter().append("th").text(function(level) {
          return _this.formatLabel(level.caption);
        }).attr("colspan", function(d) {
          return _this.memberSpan(d);
        }).attr("class", "wv-col-header").classed("wv-totals", function(d) {
          return d.totals;
        });
      }
    };

    PivotTableView.prototype.renderTableData = function(tableSelection) {
      var cell, rh, rhr, self, tbody,
        _this = this;

      tbody = tableSelection.append("tbody");
      rhr = tbody.selectAll("tr.wv-row").data(this.dataTable.rows).enter().append("tr").classed("wv-row", true).classed("wv-totals", function(tr) {
        return tr.totalsRow;
      });
      rh = rhr.selectAll("th.wv-row-header").data((function(row) {
        return _this.filterRowHeaders(row.rowMembers);
      }), function(member) {
        return member.key.toString();
      }).enter().append("th").text(function(level) {
        return _this.formatLabel(level.caption);
      }).attr("rowspan", function(d) {
        return _this.memberSpan(d);
      }).attr("class", "wv-row-header").classed("wv-totals", function(d) {
        return d.totals;
      });
      self = this;
      cell = rhr.selectAll("td.wv-cell").data(function(row) {
        return row.cells;
      }).enter().append("td").classed("wv-cell", true).classed("wv-totals", function(tc) {
        return tc.totalsCell;
      });
      if (this.viewType === "text") {
        return cell.each(function(data, idx) {
          return self.renderCell(data, idx, this);
        });
      } else {
        return cell.each(function(data, idx) {
          return self.renderGraph(data, idx, this);
        });
      }
    };

    PivotTableView.prototype.filterRowHeaders = function(levels) {
      var data;

      if (this.suppressAllHeaders) {
        return [];
      }
      if (levels.length < 1) {
        return levels;
      }
      data = levels;
      if ((_.last(data).isMeasure != null) && this.suppressMeasureHeaders) {
        data = data.slice(0, -1);
      }
      return data;
    };

    PivotTableView.prototype.filterColHeaders = function(headerRows) {
      if (this.suppressAllHeaders) {
        return [];
      }
      if (this.suppressMeasureHeaders && this.pivot.measuresAxis === "columns") {
        return headerRows.slice(0, -1);
      } else {
        return headerRows;
      }
    };

    PivotTableView.prototype.renderCell = function(tableCell, idx, cell) {
      var _this = this;

      this.renderer || (this.renderer = function(tableCell, idx, cell) {
        var _ref;

        return d3.select(cell).attr("data-wv-filters", (_ref = tableCell.cell) != null ? _ref.filters.join(",") : void 0).text(function(tc) {
          return _this.formatData(tc);
        });
      });
      return this.renderer(tableCell, idx, cell);
    };

    PivotTableView.prototype.renderGraph = function(chartCell, idx, cell) {
      var container, data;

      data = this.prepareSeries(chartCell.series);
      container = d3.select(cell).append("div").attr("class", "wv-chart-container");
      return this.renderer.renderGraph(data, container);
    };

    PivotTableView.prototype.detectViewType = function(args) {
      if ((args.seriesSource != null) || (args.seriesFrom != null)) {
        return "chart";
      } else {
        return "text";
      }
    };

    PivotTableView.prototype.prepareSeries = function(data) {
      var _this = this;

      data = _.map(data, function(series) {
        return {
          name: _this.formatLabel(series.name),
          data: _this.prepareSeriesData(series.data)
        };
      });
      if (this.seriesTransformation != null) {
        return this.seriesTransformation(data);
      } else {
        return data;
      }
    };

    PivotTableView.prototype.prepareSeriesData = function(data) {
      var points,
        _this = this;

      points = _.map(data, function(point) {
        return {
          x: _this.keyToDate(point.x),
          y: parseFloat(point.y) || 0
        };
      });
      if (this.smoothingMethod != null) {
        return Utilities.smoothSeries(points, {
          windowSize: this.smoothingWindow,
          windowType: this.smoothingPeriod,
          calculation: this.smoothingMethod,
          transformation: this.smoothingTransformation,
          treatNullsAsZero: this.smoothingTreatNullsAsZero
        });
      } else {
        return points;
      }
    };

    PivotTableView.prototype.keyToDate = function(keyStr) {
      return Utilities.keyToDate(keyStr, false).unix() * 1000;
    };

    return PivotTableView;

  })();

}).call(this);

