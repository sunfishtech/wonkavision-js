(function() {
  var Axis, Dimension;
  Dimension = this.Wonkavision.Dimension;
  this.Wonkavision.Axis = Axis = (function() {
    var MemberInfo;
    function Axis(cellset, data, startIndex) {
      var dimension, _i, _len, _ref;
      this.cellset = cellset;
      this.startIndex = startIndex;
      this.members = {};
      this.dimensions = [];
      this.dimensionNames = [];
      _ref = data.dimensions;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dimension = _ref[_i];
        this.dimensions.push(new Dimension(dimension));
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
    Axis.prototype.totals = function() {
      var coord, coords, _base;
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
      return (_base = this.members)[coords] || (_base[coords] = new MemberInfo(this, coords));
    };
    MemberInfo = (function() {
      function MemberInfo(axis, key) {
        var i, val, _len, _ref;
        this.axis = axis;
        this.key = key;
        this.cellKey = ((function() {
          var _ref, _results;
          _results = [];
          for (i = 0, _ref = this.axis.startIndex; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
            _results.push(null);
          }
          return _results;
        }).call(this)) || [];
        this.cellKey.push(this.key);
        this.totals = this.axis.cellset.cell(this.cellKey);
        this.descendentKeys = [];
        _ref = this.axis.cellset.cells;
        for (val = 0, _len = _ref.length; val < _len; val++) {
          key = _ref[val];
          if (key.length > this.cellKey.length && key.length <= this.axis.endIndex + 1 && key.slice(0, (this.cellKey.length + 1) || 9e9) === this.cellKey) {
            this.descendentKeys.push(key);
          }
        }
        this.empty = this.totals.empty;
      }
      return MemberInfo;
    })();
    return Axis;
  })();
}).call(this);
