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
    return Dimension;
  })();
}).call(this);
