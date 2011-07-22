Cellset = this.Wonkavision.Cellset
responseData = JSON.parse(this.test_data.wv_query_response)

describe "Measure", ->
  cellset = null
  measure = null

  beforeEach ->
    cellset = new Cellset(responseData)
    measure = cellset.cell("2011-05-02").measures["completed"]

  it "should extract the name", ->
  	expect(measure.name).toEqual "completed"
  	expect(measure.value).toEqual 0
  	expect(measure.formatted_value).toEqual "0"

