(function() {
  var Member;
  this.Wonkavision.Member = Member = (function() {
    function Member(data) {
      this.key = data.key;
      this.caption = data.caption || this.key;
      this.sort = data.sort || this.key;
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
