(function() {
  var Cellset, responseData;
  Cellset = this.Wonkavision.Cellset;
  responseData = JSON.parse(this.test_data.wv_query_response);
  describe("Axis", function() {
    var axis, cellset;
    cellset = null;
    axis = null;
    beforeEach(function() {
      cellset = new Cellset(responseData);
      return axis = cellset.axes[0];
    });
    it("should extract the dimensions", function() {
      expect(axis.dimensions.length).toEqual(1);
      return expect(axis.dimensions[0]).not.toBeNull();
    });
    return it("should extract a list of dimension names", function() {
      return expect(axis.dimensionNames).toEqual(["context_date"]);
    });
  });
}).call(this);
