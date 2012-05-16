
Cellset = this.Wonkavision.Cellset
responseData = JSON.parse(this.test_data.wv_query_response)

describe "Cellset", ->
  cellset = null

  beforeEach ->
    cellset = new Cellset(responseData)

  it "should extract the aggregation", ->
    expect( cellset.aggregation ).toEqual "Rpm::WorkQueueActivity"
  
  it "should extract the slicer filters", ->
    expect( cellset.slicer.length ).toEqual 2
    expect( cellset.slicer[0].toString() ).toEqual "dimension::context_date::key::eq::'2011-05-02'"
    expect( cellset.slicer[1].toString() ).toEqual "dimension::context_date::key::gt::'2011-05-02'"
  
  it "should extract the filters", ->
    expect( cellset.filters.length ).toEqual 1
    expect( cellset.filters[0].toString() ).toEqual "dimension::context_date::key::eq::'2011-05-02'"

  it "should extract the totals cell", ->
    expect( cellset.totals ).not.toBeNull()
    expect( cellset.totals.dimensions.length ).toEqual 0
    expect( cellset.totals.key ).toEqual []

  it "should extract measure names", ->
    expect( cellset.measureNames ).toEqual ["count", "incoming", "outgoing", "completed", "overdue"]
  
  it "should extract the axes", ->
    expect( cellset.axes.length ).toEqual 1
    expect( cellset.axes[0].dimensions.length ).toEqual 1

  it "should extract cells", ->
    expect( cellset.cells ).not.toBeNull()

  it "should produce an empty cell if the tuple is not found", ->
    expect( cellset.cell("2011-05-01") ).not.toBeNull()
    expect( cellset.cell("2011-05-01").empty ).toBeTruthy()

  it "should return a cell via the cell method if the tuple is found", ->
    expect( cellset.cell("2011-05-02") ).not.toBeNull()
    expect( cellset.cell("2011-05-02").empty ).not.toBeTruthy()


  


  