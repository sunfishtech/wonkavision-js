(function() {
  var Dimension, Member;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Member = this.Wonkavision.Member;
  this.Wonkavision.Dimension = Dimension = (function() {
    function Dimension(axis, data, keyIndex) {
      this.axis = axis;
      this.keyIndex = keyIndex;
      this.name = data.name;
      this.members = _.sortBy(_.map(data.members, __bind(function(mem) {
        return new Member(this, mem);
      }, this)), function(member) {
        return member.sort;
      });
    }
    return Dimension;
  })();
}).call(this);
