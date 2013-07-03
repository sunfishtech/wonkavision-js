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
      if (this.axis.cellset.includeTotals) {
        this.members.push(new Member(this, {
          key: null,
          caption: "" + this.name + "_total",
          totals: true
        }));
      }
    }

    Dimension.prototype.sortBy = function(sortFunc) {
      return this.members = _.sortBy(this.members, sortFunc);
    };

    return Dimension;

  })();

}).call(this);
