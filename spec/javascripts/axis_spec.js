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
    it("should extract a list of dimension names", function() {
      return expect(axis.dimensionNames).toEqual(["context_date"]);
    });
    return describe("totals", function() {
      var cell;
      cell = null;
      beforeEach(function() {
        return cell = axis.totals("2011-05-02");
      });
      it("should locate a totals cell for the given coordinates", function() {
        expect(cell).not.toBeNull();
        return expect(cell.empty).not.toBeTruthy();
      });
      it("should locate a cellw ith an abbreviated key matching just the axis coords", function() {
        return expect(cell.key).toEqual(["2011-05-02"]);
      });
      it("should locate a cell with correctly specified dimensions", function() {
        return expect(cell.totals.dimensions).toEqual(["context_date"]);
      });
      return it("should aggregate all detail for the given summary cell", function() {
        return expect(cell.totals.count.value).toEqual(1);
      });
    });
  });
}).call(this);
