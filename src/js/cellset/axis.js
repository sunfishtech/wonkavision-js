(function() {
  var Axis, Dimension, Level, LevelCollection;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Dimension = this.Wonkavision.Dimension;
  this.Wonkavision.Axis = Axis = (function() {
    function Axis(name, cellset, data, startIndex) {
      var dimension, _i, _len, _ref;
      this.name = name;
      this.cellset = cellset;
      this.startIndex = startIndex;
      this.levels = new LevelCollection();
      this.dimensions = [];
      this.dimensionNames = [];
      _ref = data.dimensions;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dimension = _ref[_i];
        this.dimensions.push(new Dimension(this, dimension));
        this.dimensionNames.push(dimension.name);
      }
      this.endIndex = this.startIndex + this.dimensions.length - 1;
      this.initLevels();
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
          level = parent.levels.push(new Level(childKey, parent, depth + this.startIndex, member));
          _results.push(this.initLevels(childKey, level));
        }
        return _results;
      }
    };
    Axis.prototype.registerCell = function(cell) {
      var level, levelKey;
      if (!cell.empty) {
        levelKey = cell.key.slice(this.startIndex, (this.startIndex + 1) || 9e9);
        level = this.levels.get(levelKey);
        return level.registerCell(cell);
      }
    };
    return Axis;
  })();
  this.Wonkavision.Level = Level = (function() {
    function Level(key, parent, keyIndex, member) {
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
        this.levels = new LevelCollection();
      }
    }
    Level.prototype.leaves = function(nonEmpty) {
      if (nonEmpty == null) {
        nonEmpty = false;
      }
      if (this.isLeaf) {
        return [this];
      } else {
        return this.levels.leaves(nonEmpty);
      }
    };
    Level.prototype.registerCell = function(cell) {
      var child, childIndex, childKey;
      this.isEmpty = false;
      if (!this.isLeaf) {
        childIndex = this.keyIndex + 1;
        childKey = cell.key.slice(this.axis.startIndex, (childIndex + 1) || 9e9);
        child = this.levels.get(childKey);
        return child.registerCell(cell);
      }
    };
    return Level;
  })();
  this.Wonkavision.LevelCollection = LevelCollection = (function() {
    function LevelCollection(levels, isNonEmpty) {
      if (levels == null) {
        levels = [];
      }
      this.isNonEmpty = isNonEmpty != null ? isNonEmpty : false;
      this.levels = [];
      this.length = 0;
      _.each(levels, __bind(function(level) {
        return this.push(level);
      }, this));
    }
    LevelCollection.prototype.get = function(key) {
      return _.find(this.levels, function(l) {
        return l.key.toString() === key.toString();
      });
    };
    LevelCollection.prototype.push = function(level) {
      this.length += 1;
      this.levels.push(level);
      return level;
    };
    LevelCollection.prototype.each = function(callback) {
      return _.each(this.levels, callback);
    };
    LevelCollection.prototype.nonEmpty = function() {
      return new LevelCollection(_.filter(this.levels, function(level) {
        return !level.isEmpty;
      }), true);
    };
    LevelCollection.prototype.leaves = function(nonEmpty) {
      var levels;
      if (nonEmpty == null) {
        nonEmpty = this.isNonEmpty;
      }
      levels = nonEmpty ? this.nonEmpty().levels : this.levels;
      return _.flatten(_.map(levels, function(level) {
        return level.leaves(nonEmpty);
      }));
    };
    LevelCollection.prototype.at = function(idx) {
      return this.levels[idx];
    };
    LevelCollection.prototype.toArray = function() {
      return this.levels;
    };
    return LevelCollection;
  })();
}).call(this);
