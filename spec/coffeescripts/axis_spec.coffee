
Cellset = this.Wonkavision.Cellset
Axis = this.Wonkavision.Cellset

responseData = JSON.parse(this.test_data.wv_query_response)

describe "Axis", ->
  cellset = null
  axis = null

  beforeEach ->
    cellset = new Cellset(responseData)
    axis = cellset.axes[0]

  it "should extract the dimensions", ->
    expect(axis.dimensions.length).toEqual 1
    expect(axis.dimensions[0]).not.toBeNull()
  
  it "should extract a list of dimension names", ->
    expect(axis.dimensionNames).toEqual ["context_date"]

  describe "totals", ->
    cell = null

    beforeEach ->
      cell = axis.totals("2011-05-02")
     
    it "should locate a totals cell for the given coordinates", ->
      expect(cell).not.toBeNull()
      expect(cell.empty).not.toBeTruthy()
    
    it "should locate a cellw ith an abbreviated key matching just the axis coords", ->
      expect(cell.key).toEqual ["2011-05-02"]
    
    it "should locate a cell with correctly specified dimensions", ->
      expect(cell.totals.dimensions).toEqual ["context_date"]
    
    it "should aggregate all detail for the given summary cell", ->
      expect(cell.totals.count.value).toEqual 1

