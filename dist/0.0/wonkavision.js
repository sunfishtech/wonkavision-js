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
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
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
      Client.prototype.execute = function(query, options) {
        var error, raw, success;
        raw = options.raw;
        success = __bind(function(data) {
          var response;
          response = raw ? data : new Wonkavision.Cellset(data.json, query);
          return options.success(response);
        }, this);
        error = options.error || function() {};
        this.get("query/" + query.cubeName + "/" + query.aggregationName, query.toParams(), success, error);
        return this;
      };
      Client.prototype.get = function(path, params, success, error) {
        var uri;
        uri = this.url + (this.url.substr(-1) === "/" ? "" : "/");
        uri = this.url + path;
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
        var data, json;
        if (settings.ajax.readyState === 4) {
          try {
            json = JSON.parse(settings.ajax.responseText);
          } catch (error) {
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
    return new Remote().xhr();
  };
}).call(this);

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
      if (parts[0] === "dimension" || parts[0] === "measure") {
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
  var Filter, Query;
  var __slice = Array.prototype.slice, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Filter = this.Wonkavision.Filter;
  this.Wonkavision.Query = Query = (function() {
    function Query(client, query) {
      var axis, _i, _j, _len, _len2, _ref, _ref2, _this;
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
      _ref2 = Wonkavision.AXIS_NAMES;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        axis = _ref2[_j];
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
      if (query.cube != null) {
        this.cube(query.cube);
      }
      if (query.aggregation != null) {
        this.aggregation(query.aggregation);
      }
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
      _ref = Wonkavision.AXIS_NAMES;
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
      return this.axes[Wonkavision.AXIS_NAMES.indexOf(axisName)];
    };
    Query.prototype.select = function(axis) {
      return __bind(function() {
        var dimensions, ordinal;
        dimensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        ordinal = Wonkavision.AXIS_NAMES.indexOf(axis);
        if (ordinal >= 0) {
          if (this.axes.length > ordinal) {
            dimensions = this.axes[ordinal].concat(dimensions);
          }
          this.axes[ordinal] = _.flatten(dimensions);
        }
        return this;
      }, this);
    };
    return Query;
  })();
}).call(this);

(function() {
  var Axis, ChartTable, MeasureLevel, Member, MemberCollection, PivotTable;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  this.Wonkavision.PivotTable = PivotTable = (function() {
    function PivotTable(cellset, options) {
      var axis, cell, key, _i, _len, _ref, _ref2, _ref3;
      this.cellset = cellset;
      if (options == null) {
        options = {};
      }
      this.axes = _.map(this.cellset.axes, __bind(function(axis) {
        return this[axis.name] = new PivotTable.Axis(axis.name, axis.dimensions, this);
      }, this));
      this.measuresAxis = options.measuresAxis || options.measuresOn || "columns";
      this.initializeAxes();
      _ref = this.cellset.cells;
      for (key in _ref) {
        cell = _ref[key];
        _ref2 = this.axes;
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          axis = _ref2[_i];
          axis.registerCell(cell);
        }
      }
      if (this.measuresAxis != null) {
        if ((_ref3 = this[this.measuresAxis]) != null) {
          _ref3.appendMeasures();
        }
      }
      if (!((this.rows != null) && !this.rows.isEmpty)) {
        this.pivot();
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
    return PivotTable;
  })();
  this.Wonkavision.ChartTable = ChartTable = (function() {
    __extends(ChartTable, PivotTable);
    function ChartTable(cellset, options) {
      if (options == null) {
        options = {};
      }
      this.seriesSource = options.seriesSource || options.seriesOn || (cellset.measureNames.length > 1 ? "measures" : "rows");
      ChartTable.__super__.constructor.call(this, cellset, options);
    }
    ChartTable.prototype.initializeAxes = function() {
      console.debug;
      this.xAxisDimension = this.columns.dimensions.pop();
      this.seriesDimension = this.seriesSource !== "measures" && (this[this.seriesSource] != null) ? this[this.seriesSource].dimensions.pop() : void 0;
      if (this.seriesSource === "measures") {
        this.measuresAxis = null;
      }
      return ChartTable.__super__.initializeAxes.call(this);
    };
    return ChartTable;
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
      if (!(cell.empty || this.isEmpty)) {
        levelKey = cell.key.slice(this.startIndex, (this.startIndex + 1) || 9e9);
        level = this.members.get(levelKey);
        return level.registerCell(cell);
      }
    };
    Axis.prototype.appendMeasures = function() {
      return this.members.appendMeasures(this.pivotTable.cellset);
    };
    return Axis;
  })();
  this.Wonkavision.PivotTable.Member = Member = (function() {
    function Member(key, parent, keyIndex, member) {
      this.key = key;
      this.parent = parent;
      this.keyIndex = keyIndex;
      this.member = member;
      this.axis = this.parent.axis != null ? this.parent.axis : this.parent;
      this.caption = this.member.caption;
      this.depth = this.keyIndex - this.axis.startIndex;
      this.isEmpty = true;
      this.isLeaf = this.keyIndex === this.axis.endIndex;
      if (!this.isLeaf) {
        this.members = new MemberCollection();
      }
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
      if (!this.isLeaf) {
        childIndex = this.keyIndex + 1;
        childKey = cell.key.slice(this.axis.startIndex, (childIndex + 1) || 9e9);
        child = this.members.get(childKey);
        return child.registerCell(cell);
      }
    };
    return Member;
  })();
  this.Wonkavision.PivotTable.MeasureLevel = MeasureLevel = (function() {
    __extends(MeasureLevel, Member);
    function MeasureLevel(measureName, parentLevel) {
      this.measureName = measureName;
      this.key = parentLevel.key.concat(["@" + measureName]);
      this.parent = parentLevel;
      this.axis = parentLevel.axis;
      this.caption = measureName;
      this.depth = parentLevel.depth + 1;
      this.isEmpty = parentLevel.isEmpty;
      this.isLeaf = true;
      parentLevel.isLeaf = false;
      this.isMeasures = true;
    }
    MeasureLevel.prototype.cellKey = function() {
      return this.key.slice(0, -1);
    };
    return MeasureLevel;
  })();
  this.Wonkavision.PivotTable.MemberCollection = MemberCollection = (function() {
    function MemberCollection(members, isNonEmpty) {
      if (members == null) {
        members = [];
      }
      this.isNonEmpty = isNonEmpty != null ? isNonEmpty : false;
      this.members = [];
      this.length = 0;
      _.each(members, __bind(function(level) {
        return this.push(level);
      }, this));
    }
    MemberCollection.prototype.get = function(key) {
      return _.find(this.members, function(l) {
        return l.key.toString() === key.toString();
      });
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
          return new MeasureLevel(mname, pLeaf);
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
      this.sort = data.sort || this.key;
      this.attributes = data.attributes || {};
    }
    Member.prototype.toString = function() {
      return key.toString();
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
      this.axis = axis;
      this.keyIndex = keyIndex;
      this.name = data.name;
      this.members = _.sortBy(_.map(data.members, function(mem) {
        return new Member(this, mem);
      }), function(member) {
        return member.sort;
      });
    }
    return Dimension;
  })();
}).call(this);

(function() {
  var Axis, Dimension;
  Dimension = this.Wonkavision.Dimension;
  this.Wonkavision.Axis = Axis = (function() {
    function Axis(name, cellset, data, startIndex) {
      var dimension, idx, _len, _ref;
      this.name = name;
      this.cellset = cellset;
      this.startIndex = startIndex;
      this.dimensions = [];
      this.dimensionNames = [];
      _ref = data.dimensions;
      for (idx = 0, _len = _ref.length; idx < _len; idx++) {
        dimension = _ref[idx];
        this.dimensions.push(new Dimension(this, dimension, this.startIndex + idx));
        this.dimensionNames.push(dimension.name);
      }
      this.endIndex = this.startIndex + this.dimensions.length - 1;
    }
    Axis.prototype.dimensionNames = function() {
      var d, _i, _len, _ref, _results;
      _ref = this.dimensions;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        d = _ref[_i];
        _results.push(d.name);
      }
      return _results;
    };
    return Axis;
  })();
}).call(this);

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

(function() {
  var Cell, Measure;
  Measure = this.Wonkavision.Measure;
  this.Wonkavision.Cell = Cell = (function() {
    function Cell(cellset, data) {
      var measure, _i, _len, _ref;
      this.cellset = cellset;
      this.measures = {};
      this.empty = true;
      if (data) {
        _ref = data.measures;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          measure = _ref[_i];
          this.addMeasure(measure);
        }
        this.key = data.key;
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
      var a, axis, cell, f, filters, i, index, name, slicer, startIndex, _i, _len, _len2, _ref, _ref2;
      if (data == null) {
        data = {};
      }
      this.query = query != null ? query : null;
      this.aggregation = data.aggregation || null;
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
      this.totals = new Cell(this, data.totals);
      this.measureNames = data.measure_names || [];
      startIndex = 0;
      this.axes = (function() {
        var _ref, _results;
        _results = [];
        for (i = 0, _ref = data.axes.length; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
          axis = data.axes[i];
          name = Wonkavision.AXIS_NAMES[i];
          a = new Axis(name, this, axis, startIndex);
          startIndex = a.endIndex + 1;
          _results.push(a);
        }
        return _results;
      }).call(this);
      this.cells = {};
      _ref = data.cells || [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        this.cells[cell.key] = new Cell(this, cell);
      }
      _ref2 = Wonkavision.AXIS_NAMES;
      for (index = 0, _len2 = _ref2.length; index < _len2; index++) {
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

