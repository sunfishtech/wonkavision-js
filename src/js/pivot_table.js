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

    PivotTable.prototype.cellValues = function(rowMemberOrMembers) {
      var rowMember,
        _this = this;

      rowMember = _.isArray(rowMemberOrMembers) ? _.last(rowMemberOrMembers) : rowMemberOrMembers;
      if (this.isFlat && this.measuresAxis === "rows") {
        return this.extractMeasures([rowMember]);
      } else if (this.columns && !this.columns.isEmpty) {
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

    PivotTable.prototype.extractMeasures = function(keyMembers, formatted) {
      var cell, cellKey;

      if (formatted == null) {
        formatted = true;
      }
      cellKey = _.flatten(_.map(_.sortBy(_.compact(keyMembers), function(m) {
        return m.keyIndex;
      }), function(m) {
        return m.cellKey();
      }));
      cell = this.cellset.cells[cellKey];
      return _.map(this.cellset.measureNames, function(m) {
        if (cell != null) {
          if (formatted) {
            return cell[m].formattedValue;
          } else {
            return cell[m].value;
          }
        }
      });
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
