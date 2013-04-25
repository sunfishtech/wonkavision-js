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

      Client.prototype.execute = function(query, options) {
        var error, raw, success,
          _this = this;

        raw = options.raw;
        success = function(data) {
          var response;

          response = raw ? data : new Wonkavision.Cellset(data.json, query);
          return options.success(response);
        };
        error = options.error || function() {};
        this.get("query", query.toParams(), success, error);
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
  var Filter, Query,
    __slice = [].slice;

  Filter = this.Wonkavision.Filter;

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
  var Client, Query, QuerySet;

  Query = this.Wonkavision.Query;

  Client = this.Wonkavision.Client;

  this.Wonkavision.QuerySet = QuerySet = (function() {
    function QuerySet(options) {
      if (options == null) {
        options = {};
      }
      this.serverUrl = options.url || options.serverUrl || "";
      this.client = options.client || new Client(this.serverUrl);
      this.queries = [];
      this.global = new Query();
    }

    QuerySet.prototype.addQuery = function(query) {
      var newQuery;

      if (query == null) {
        query = {};
      }
      newQuery = this.client.query(query);
      return this.queries.push(this.client.query(query));
    };

    return QuerySet;

  })();

}).call(this);

(function() {
  var Axis, ChartTable, MeasureMember, Member, MemberCollection, PivotTable,
    __slice = [].slice,
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
      _.bindAll(this, "cellValues", "cellValue");
      this.axes = _.map(this.cellset.axes, function(axis) {
        return _this[axis.name] = new PivotTable.Axis(axis.name, axis.dimensions.slice(0), _this);
      });
      this.measuresAxis = options.measuresAxis || options.measuresOn || "columns";
      this.initializeAxes();
      this.seriesCells = {};
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

    PivotTable.prototype.cellValues = function(rowMemberOrMembers) {
      var rowMember,
        _this = this;

      rowMember = _.isArray(rowMemberOrMembers) ? _.last(rowMemberOrMembers) : rowMemberOrMembers;
      if (this.columns && !this.columns.isEmpty) {
        return _.map(this.columns.members.nonEmpty().leaves(), function(colMember) {
          return _this.cellValue(rowMember, colMember);
        });
      } else {
        return [this.cellValue(rowMember)];
      }
    };

    PivotTable.prototype.cellValue = function() {
      var keyMembers;

      keyMembers = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.extractValue(keyMembers);
    };

    PivotTable.prototype.extractValue = function(keyMembers, measureName) {
      var cell, cellKey;

      cellKey = _.flatten(_.map(_.sortBy(_.compact(keyMembers), function(m) {
        return m.keyIndex;
      }), function(m) {
        return m.cellKey();
      }));
      cell = this.cellset.cells[cellKey];
      if (cell != null) {
        measureName = measureName || this.findMeasureName(keyMembers) || this.cellset.measureNames[0];
        return cell[measureName].value;
      }
    };

    PivotTable.prototype.findMeasureName = function(keyMembers) {
      var _ref;

      return (_ref = _.find(keyMembers, function(m) {
        return (m != null ? m.measureName : void 0) != null;
      })) != null ? _ref.measureName : void 0;
    };

    return PivotTable;

  })();

  this.Wonkavision.ChartTable = ChartTable = (function(_super) {
    __extends(ChartTable, _super);

    function ChartTable(cellset, options) {
      if (options == null) {
        options = {};
      }
      _.bindAll(this, "cellValues", "cellValue");
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

    ChartTable.prototype.cellValue = function() {
      var keyMembers, seriesMembers,
        _this = this;

      keyMembers = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.seriesSource === "measures") {
        return _.map(this.cellset.measureNames, function(measureName) {
          return {
            name: measureName,
            data: _this.seriesFromMeasure(keyMembers, measureName)
          };
        });
      } else if (this.seriesDimension != null) {
        seriesMembers = _.filter(this.seriesDimension.members, function(m) {
          return _this.seriesCells[m.key] != null;
        });
        return _.map(seriesMembers, function(seriesMember) {
          return {
            name: seriesMember.caption,
            data: _this.seriesFromMember(keyMembers, seriesMember)
          };
        });
      }
    };

    ChartTable.prototype.seriesFromMeasure = function(keyMembers, measureName) {
      var _this = this;

      return _.map(this.xAxisDimension.members, function(x) {
        var key, pivotMember, xMember;

        xMember = Member.fromDimensionMember(x);
        pivotMember = new MeasureMember(measureName, xMember);
        key = keyMembers.concat([pivotMember]);
        return {
          x: x.key,
          y: _this.extractValue(key, measureName)
        };
      });
    };

    ChartTable.prototype.seriesFromMember = function(keyMembers, member) {
      var pivotMember,
        _this = this;

      pivotMember = Member.fromDimensionMember(member);
      return _.map(this.xAxisDimension.members, function(x) {
        var key, xMember;

        xMember = Member.fromDimensionMember(x);
        key = keyMembers.concat([pivotMember, xMember]);
        return {
          x: x.key,
          y: _this.extractValue(key)
        };
      });
    };

    return ChartTable;

  })(PivotTable);

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

      this.key = key;
      this.parent = parent;
      this.keyIndex = keyIndex;
      this.member = member;
      this.axis = ((_ref = this.parent) != null ? _ref.axis : void 0) != null ? this.parent.axis : this.parent;
      this.caption = this.member.caption;
      this.depth = this.axis ? this.keyIndex - this.axis.startIndex : 0;
      this.isEmpty = true;
      this.isLeaf = this.axis ? this.keyIndex === this.axis.endIndex : 0;
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
      var _this = this;

      this.axis = axis;
      this.keyIndex = keyIndex;
      this.name = data.name;
      this.members = _.sortBy(_.map(data.members, function(mem) {
        return new Member(_this, mem);
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
      var a, axis, cell, f, filters, i, index, name, slicer, startIndex, _i, _j, _len, _len1, _ref, _ref1;

      if (data == null) {
        data = {};
      }
      this.query = query != null ? query : null;
      this.cube = data.cube || null;
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
        var _i, _ref, _results;

        _results = [];
        for (i = _i = 0, _ref = data.axes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
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
      _ref1 = Wonkavision.AXIS_NAMES;
      for (index = _j = 0, _len1 = _ref1.length; _j < _len1; index = ++_j) {
        axis = _ref1[index];
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
  var RickshawRenderer, _base;

  RickshawRenderer = (function() {
    function RickshawRenderer(pivotView, options) {
      this.view = pivotView;
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
          data: _.map(series.data, function(point) {
            return {
              x: _this.keyToDate(point.x),
              y: parseFloat(point.y) || 0
            };
          })
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

    RickshawRenderer.prototype.keyToDate = function(keyStr) {
      var dateStr;

      dateStr = "" + keyStr.slice(0, 4) + "-" + keyStr.slice(4, 6) + "-" + keyStr.slice(6, 8);
      return moment(dateStr).unix();
    };

    return RickshawRenderer;

  })();

  (_base = this.Wonkavision).renderers || (_base.renderers = {});

  this.Wonkavision.renderers.Rickshaw = RickshawRenderer;

}).call(this);

(function() {
  var HighchartsRenderer, _base;

  HighchartsRenderer = (function() {
    function HighchartsRenderer(pivotView, options) {
      this.view = pivotView;
      this.extractArgs(options);
    }

    HighchartsRenderer.prototype.renderGraph = function(data, container) {
      var chart, chartArgs, hc, series,
        _this = this;

      series = _.map(data, function(series) {
        return {
          name: series.name,
          data: _.map(series.data, function(point) {
            return [_this.keyToDate(point.x), parseFloat(point.y) || 0];
          })
        };
      });
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
      return this.chartArgs.xAxis = _.defaults(this.chartArgs.xAxis || {}, {
        type: 'datetime'
      });
    };

    HighchartsRenderer.prototype.keyToDate = function(keyStr) {
      var dateStr;

      dateStr = "" + keyStr.slice(0, 4) + "-" + keyStr.slice(4, 6) + "-" + keyStr.slice(6, 8);
      return moment(dateStr).unix() * 1000;
    };

    return HighchartsRenderer;

  })();

  (_base = this.Wonkavision).renderers || (_base.renderers = {});

  this.Wonkavision.renderers.Highcharts = HighchartsRenderer;

}).call(this);

(function() {
  var PivotTableView;

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
      this.rows = this.pivot.rows.members.nonEmpty();
      this.columns = this.pivot.columns.members.nonEmpty();
      this.format = d3.format(this.cellFormat);
      return this.element.append("table").attr("class", "wv-pivot-table").call(this.renderTable);
    };

    PivotTableView.prototype.extractArgs = function(args) {
      this.cellFormat = args.cellFormat || this.cellFormat || ",.1f";
      if (args.data) {
        this.data = args.data;
      }
      if (args.element) {
        this.element = d3.selectAll(args.element);
      }
      this.viewType = args.viewType || args.view || this.detectViewType(args);
      return this.renderer = this.createRenderer(args);
    };

    PivotTableView.prototype.createRenderer = function(args) {
      var rendererClass;

      rendererClass = args.renderer || Wonkavision.renderers["default"] || Wonkavision.renderers.Rickshaw;
      return new rendererClass(this, args);
    };

    PivotTableView.prototype.memberSpan = function(member) {
      var _ref;

      return (_ref = member.members) != null ? _ref.nonEmpty().leaves().length : void 0;
    };

    PivotTableView.prototype.renderTable = function(tableSelection) {
      this.table = tableSelection;
      if ((this.pivot.columns != null) && !this.pivot.columns.isEmpty) {
        this.table.call(this.renderColumnHeaders);
      }
      return this.table.call(this.renderTableData);
    };

    PivotTableView.prototype.renderColumnHeaders = function(tableSelection) {
      var ch, chr, colMembers, fillSpan, thead,
        _this = this;

      colMembers = this.columns.partitionV();
      thead = tableSelection.append("thead");
      chr = thead.selectAll("tr.wv-col").data(colMembers).enter().append("tr").attr("class", "wv-col");
      fillSpan = this.pivot.rows.dimensions.length + (this.pivot.measuresAxis === "rows" ? 1 : 0);
      chr.append("th").attr("colspan", fillSpan);
      return ch = chr.selectAll("td.wv-col-header").data((function(d) {
        return d;
      }), function(d) {
        return d.key.toString();
      }).enter().append("th").text(function(level) {
        return level.caption;
      }).attr("colspan", function(d) {
        return _this.memberSpan(d);
      }).attr("class", "wv-col-header");
    };

    PivotTableView.prototype.renderTableData = function(tableSelection) {
      var cell, rh, rhr, rowMembers, self, tbody,
        _this = this;

      rowMembers = this.rows.partitionH();
      tbody = tableSelection.append("tbody");
      rhr = tbody.selectAll("tr.wv-row").data(rowMembers).enter().append("tr").attr("class", "wv-row");
      rh = rhr.selectAll("th.wv-row-header").data((function(d) {
        return d;
      }), function(d) {
        return d.key.toString();
      }).enter().append("th").text(function(level) {
        return level.caption;
      }).attr("rowspan", function(d) {
        return _this.memberSpan(d);
      }).attr("class", "wv-row-header");
      self = this;
      cell = rhr.selectAll("td.wv-cell").data(this.pivot.cellValues).enter().append("td").attr("class", "wv-cell");
      if (this.viewType === "text") {
        return cell.text(function(d) {
          if (d != null) {
            return self.format(d);
          } else {
            return "-";
          }
        });
      } else {
        return cell.each(function(data, idx) {
          return self.renderGraph(data, idx, this);
        });
      }
    };

    PivotTableView.prototype.renderGraph = function(data, idx, cell) {
      var container;

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

    return PivotTableView;

  })();

}).call(this);

