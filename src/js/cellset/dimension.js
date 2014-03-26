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
        this.members.push(this.createTotalMember());
      }
    }

    Dimension.prototype.rawMembers = function() {
      if (this.axis.cellset.includeTotals) {
        return this.members.slice(0, this.members.length - 1);
      } else {
        return this.members;
      }
    };

    Dimension.prototype.sortBy = function(sortFunc) {
      this.members = this.rawMembers();
      this.members = _.sortBy(this.members, sortFunc);
      if (this.axis.cellset.includeTotals) {
        return this.members.push(this.createTotalMember());
      }
    };

    Dimension.prototype.createTotalMember = function() {
      return new Member(this, {
        key: null,
        caption: "" + this.name + "_total",
        totals: true
      });
    };

    return Dimension;

  })();

}).call(this);
