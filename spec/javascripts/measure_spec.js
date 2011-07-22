(function() {
  var Cellset, responseData;
  Cellset = this.Wonkavision.Cellset;
  responseData = JSON.parse(this.test_data.wv_query_response);
  describe("Measure", function() {
    var cellset, measure;
    cellset = null;
    measure = null;
    beforeEach(function() {
      cellset = new Cellset(responseData);
      return measure = cellset.cell("2011-05-02").measures["completed"];
    });
    return it("should extract the name", function() {
      expect(measure.name).toEqual("completed");
      expect(measure.value).toEqual(0);
      return expect(measure.formatted_value).toEqual("0");
    });
  });
}).call(this);
