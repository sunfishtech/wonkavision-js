(function() {
  var Cellset, responseData;

  Cellset = this.Wonkavision.Cellset;

  responseData = JSON.parse(this.test_data.wv_query_response);

  describe("Member", function() {
    var cellset, member;

    cellset = null;
    member = null;
    beforeEach(function() {
      cellset = new Cellset(responseData);
      return member = cellset.axes[0].dimensions[0].members[0];
    });
    it("should extract the key", function() {
      return expect(member.key).toEqual("2011-05-02");
    });
    return it("should extract the caption or use the name", function() {
      return expect(member.caption).toEqual("2011-05-02");
    });
  });

}).call(this);
