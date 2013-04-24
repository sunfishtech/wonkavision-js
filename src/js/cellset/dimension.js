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
