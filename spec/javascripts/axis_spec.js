(function() {
  var Cellset, responseData, responseData2;
  Cellset = this.Wonkavision.Cellset;
  responseData = JSON.parse(this.test_data.wv_query_response);
  responseData2 = JSON.parse(this.test_data.wv_query_response2);
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
  describe("Level", function() {
    var axis, cellset;
    cellset = null;
    axis = null;
    beforeEach(function() {
      cellset = new Cellset(responseData2);
      return axis = cellset.axes[1];
    });
    return it("should register a level for each member of the root dimension", function() {
      console.log(axis);
      return expect(_.size(axis.levels)).toEqual(1);
    });
  });
}).call(this);
