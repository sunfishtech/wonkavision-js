(function() {
  var Member;

  this.Wonkavision.Member = Member = (function() {
    function Member(dimension, data) {
      this.dimension = dimension;
      this.key = data.key;
      this.caption = data.caption || this.key;
      this.sort = data.sort || this.caption;
      this.attributes = data.attributes || {};
    }

    Member.prototype.toString = function() {
      return key.toString();
    };

    Member.prototype.toKey = function() {
      return key;
    };

    return Member;

  })();

}).call(this);
