Client = this.Wonkavision.Client
Query = this.Wonkavision.Query
QuerySet = this.Wonkavision.QuerySet

test_data = this.test_data

client = null
querySet = null

beforeEach ->
  client = new Client()
  querySet = new QuerySet()

describe "QuerySet", ->
  it "should be able to be instantiated", ->
    expect(new QuerySet()).not.toBeNull

  describe "addQuery", ->
    it "should append the specified query to the queries collection", ->
      querySet.addQuery
        columns : ["hi"]
      querySet.addQuery
        columns : ["ho"]

      expect(querySet.queries.length).toEqual 2
      expect(querySet.queries[0].axes[0]).toEqual ["hi"]
      expect(querySet.queries[1].axes[0]).toEqual ["ho"]

