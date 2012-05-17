(function() {
  var Cell, Cellset, responseData;
  Cellset = this.Wonkavision.Cellset;
  Cell = this.Wonkavision.Cell;
  responseData = JSON.parse(this.test_data.wv_query_response);
  describe("Cell", function() {
    var cell, cellset;
    cellset = null;
    cell = null;
    beforeEach(function() {
      cellset = new Cellset(responseData);
      return cell = cellset.cell("2011-05-02");
    });
    it("should extract the measures", function() {
      expect(cell.empty).not.toBeTruthy();
      return expect(cell.key).toEqual(["2011-05-02"]);
    });
    it("should return empty if no data is provided", function() {
      return expect(new Cell(cellset, null).empty).toBeTruthy();
    });
    return it("should provide access to measures as direct properties", function() {
      expect(cell.count).not.toBeNull();
      return expect(cell.count).toEqual(cell.measures["count"]);
    });
  });
}).call(this);
