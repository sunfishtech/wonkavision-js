(function() {
  var Cellset, responseData;
  Cellset = this.Wonkavision.Cellset;
  responseData = JSON.parse(this.test_data.wv_query_response);
  describe("Cellset", function() {
    var cellset;
    cellset = null;
    beforeEach(function() {
      return cellset = new Cellset(responseData);
    });
    it("should extract the aggregation", function() {
      return expect(cellset.aggregation).toEqual("Rpm::WorkQueueActivity");
    });
    it("should extract the slicer filters", function() {
      expect(cellset.slicer.length).toEqual(2);
      expect(cellset.slicer[0]).toEqual("dimension::context_date::key::eq::'2011-05-02'");
      return expect(cellset.slicer[1]).toEqual("dimension::context_date::key::gt::'2011-05-02'");
    });
    it("should extract the filters", function() {
      expect(cellset.filters.length).toEqual(1);
      return expect(cellset.filters[0]).toEqual("dimension::context_date::key::eq::'2011-05-02'");
    });
    it("should extract the totals cell", function() {
      expect(cellset.totals).not.toBeNull();
      expect(cellset.totals.dimensions.length).toEqual(0);
      return expect(cellset.totals.key).toEqual([]);
    });
    it("should extract measure names", function() {
      return expect(cellset.measure_names).toEqual(["count", "incoming", "outgoing", "completed", "overdue"]);
    });
    it("should extract the axes", function() {
      expect(cellset.axes.length).toEqual(1);
      return expect(cellset.axes[0].dimensions.length).toEqual(1);
    });
    it("should extract cells", function() {
      return expect(cellset.cells).not.toBeNull();
    });
    it("should produce an empty cell if the tuple is not found", function() {
      expect(cellset.cell("2011-05-01")).not.toBeNull();
      return expect(cellset.cell("2011-05-01").empty).toBeTruthy();
    });
    return it("should return a cell via the cell method if the tuple is found", function() {
      expect(cellset.cell("2011-05-02")).not.toBeNull();
      return expect(cellset.cell("2011-05-02").empty).not.toBeTruthy();
    });
  });
}).call(this);
