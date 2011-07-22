
Cellset = this.Wonkavision.Cellset
responseData = JSON.parse(this.test_data.wv_query_response)

describe "Dimension", ->
  cellset = null
  dimension = null

  beforeEach ->
    cellset = new Cellset(responseData)
    dimension = cellset.axes[0].dimensions[0]

  it "should extract the name", ->
    expect(dimension.name).toEqual "context_date"

  it "should extract the members", ->
    expect(dimension.members.length).toEqual 1
    expect(dimension.members[0].key).toEqual "2011-05-02"
