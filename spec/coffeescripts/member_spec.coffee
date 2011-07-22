Cellset = this.Wonkavision.Cellset
responseData = JSON.parse(this.test_data.wv_query_response)

describe "Member", ->
  cellset = null
  member = null

  beforeEach ->
    cellset = new Cellset(responseData)
    member = cellset.axes[0].dimensions[0].members[0]

  it "should extract the key", ->
    expect(member.key).toEqual "2011-05-02"

  it "should extract the caption or use the name", ->
  	expect(member.caption).toEqual "2011-05-02"
