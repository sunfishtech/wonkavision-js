(function() {
  var Dimension, Member;
  Member = this.Wonkavision.Member;
  this.Wonkavision.Dimension = Dimension = (function() {
    function Dimension(axis, data) {
      var member, _i, _len, _ref;
      this.axis = axis;
      this.name = data.name;
      this.members = [];
      _ref = data.members;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        member = _ref[_i];
        this.members.push(new Member(member));
      }
    }
    Dimension.prototype.nonEmpty = function(parents) {
      var mem, members, _i, _len, _ref;
      members = [];
      _ref = this.members;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mem = _ref[_i];
        if (!(typeof this.isEmpty === "function" ? this.isEmpty(mem, parents) : void 0)) {
          members.push(mem);
        }
      }
      return members;
    };
    Dimension.prototype.isEmpty = function(member, parents) {
      var key;
      key = parents.slice(0);
      key.push(member.key);
      return this.axis.totals[key].empty;
    };
    return Dimension;
  })();
}).call(this);
