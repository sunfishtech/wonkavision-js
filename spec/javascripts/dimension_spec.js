(function() {
  var Cellset, responseData;

  Cellset = this.Wonkavision.Cellset;

  responseData = JSON.parse(this.test_data.wv_query_response);

  describe("Dimension", function() {
    var cellset, dimension;

    cellset = null;
    dimension = null;
    beforeEach(function() {
      cellset = new Cellset(responseData);
      return dimension = cellset.axes[0].dimensions[0];
    });
    it("should extract the name", function() {
      return expect(dimension.name).toEqual("context_date");
    });
    return it("should extract the members", function() {
      expect(dimension.members.length).toEqual(1);
      return expect(dimension.members[0].key).toEqual("2011-05-02");
    });
  });

}).call(this);
