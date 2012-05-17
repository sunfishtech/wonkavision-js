
Cellset = this.Wonkavision.Cellset

responseData = JSON.parse(this.test_data.wv_query_response)
responseData2 = JSON.parse(this.test_data.wv_query_response2)

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

  

describe "Level", ->
  cellset = null
  axis = null

  beforeEach ->
    cellset = new Cellset(responseData2)
    axis = cellset.axes[1]
  
  it "should register a level for each member of the root dimension", ->
    console.log axis
    expect(_.size(axis.levels)).toEqual(1)