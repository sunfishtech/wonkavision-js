
Cellset = this.Wonkavision.Cellset
Cell = this.Wonkavision.Cell

responseData = JSON.parse(this.test_data.wv_query_response)

describe "Cell", ->
  cellset = null
  cell = null

  beforeEach ->
    cellset = new Cellset(responseData)
    cell = cellset.cell("2011-05-02")

  it "should extract the measures", ->
    expect(cell.empty).not.toBeTruthy()
    expect(cell.dimensions).toEqual ["context_date"]
    expect(cell.key).toEqual ["2011-05-02"]

  it "should return empty if no data is provided", ->
    expect(new Cell(cellset, null).empty).toBeTruthy()

  it "should provide access to measures as direct properties", ->
    expect(cell.count).not.toBeNull()
    expect(cell.count).toEqual cell.measures["count"]
  
     
  