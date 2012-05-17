(function() {
  var Axis, Dimension, Level;
  Dimension = this.Wonkavision.Dimension;
  this.Wonkavision.Axis = Axis = (function() {
    function Axis(name, cellset, data, startIndex) {
      var dimension, _i, _len, _ref;
      this.name = name;
      this.cellset = cellset;
      this.startIndex = startIndex;
      this.levels = {};
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
          level = parent.levels[childKey] = new Level(childKey, parent, depth + this.startIndex);
          _results.push(this.initLevels(childKey, level));
        }
        return _results;
      }
    };
    Axis.prototype.registerCell = function(cell) {
      var level, levelKey;
      levelKey = cell.key.slice(this.startIndex, (this.startIndex + 1) || 9e9);
      level = this.levels[levelKey];
      return level.registerCell(cell);
    };
    return Axis;
  })();
  this.Wonkavision.Level = Level = (function() {
    function Level(key, parent, keyIndex) {
      this.key = key;
      this.parent = parent;
      this.keyIndex = keyIndex;
      this.axis = this.parent.axis != null ? this.parent.axis : this.parent;
      if (this.key != null) {
        this.name = this.key.slice(-1)[0];
      }
      this.depth = this.keyIndex - this.axis.startIndex;
      this.isEmpty = true;
      this.isLeaf = this.keyIndex === this.axis.endIndex;
      this.isRoot = this.depth === 0;
      if (!this.isLeaf) {
        this.levels = {};
      }
    }
    Level.prototype.registerCell = function(cell) {
      var child, childIndex, childKey, _base;
      this.isEmpty = false;
      if (!this.isLeaf) {
        childIndex = this.keyIndex + 1;
        childKey = cell.key.slice(this.axis.startIndex, (childIndex + 1) || 9e9);
        child = ((_base = this.levels)[childKey] || (_base[childKey] = new Level(childKey, this, childIndex)));
        return child.registerCell(cell);
      }
    };
    return Level;
  })();
}).call(this);
