Client = this.Wonkavision.Client
Query = this.Wonkavision.Query
test_data = this.test_data

client = null
query = null

beforeEach ->
  client = new Client()
  query = new Query(client)

describe "Query", ->
  it "should be able to be instantiated", ->
    expect(new Query(client)).not.toBeNull

  describe "axis query methods", ->
    it "should create select method for each axis", ->
      for axis in client.axisNames
        expect(query[axis]).not.toBeNull

    it "should configure axis selections from the axis methods", ->
      query.columns("a","b")
      expect(query.axes[0]).toEqual(["a","b"])

  describe "select", ->
    it "should set the selected dimensions to the appropriate axis location", ->
      query.select("columns")("hi","ho")
      expect(query.axes[0]).toEqual(["hi","ho"])
    it "should append dimension names", ->
      query.select("columns")("hi","ho")
      query.select("columns")("hee","ha")
      expect(query.axes[0]).toEqual(["hi","ho","hee","ha"])
    it "should properly index the specified axis", ->
      query.select("rows")("hi","ho")
      expect(query.axes[0]).toBeNull
      expect(query.axes[1]).toEqual(["hi","ho"])

  describe "measures", ->
    it "should record selected measures", ->
      query.measures("m1","m2")
      expect(query.selectedMeasures).toEqual(["m1","m2"])
    it "should append measure not replace them", ->
      query.measures("m1","m2")
      query.measures("m3","m4")
      expect(query.selectedMeasures).toEqual(["m1","m2","m3","m4"])

  describe "from", ->
    it "should store the provided cube and aggregation names", ->
      query.from("a","b")
      expect(query.cubeName).toEqual("a")
      expect(query.aggregationName).toEqual("b")
    it "should default to the cube name", ->
      query.from("a")
      expect(query.cubeName).toEqual("a")
      expect(query.aggregationName).toEqual("a")

  describe "cube", ->
    it "should set the cube name", ->
      expect(query.cube("c").cubeName).toEqual("c")

  describe "aggregation", ->
    it "should set the aggregation name", ->
      expect(query.aggregation("a").aggregationName).toEqual("a")

  describe "where", ->
    it "should parse the provided criteria into filters", ->
      query.where
        dima : 1
        "dimb.attr.gt" : "happy"
      expect(query.filters[0].toString()).toEqual("dimension::dima::key::eq::1")
      expect(query.filters[1].toString()).toEqual("dimension::dimb::attr::gt::happy")

    it "should append not replace filters", ->
      query.where dima: 1
      query.where dimb: 2
      expect(query.filters.length).toEqual(2)

  describe "toParams", ->
    it "should prepare a delimited hash of params", ->
      query.measures("m1","m2")
           .columns("c1","c2")
           .rows("r1","r2")
           .from("c","a")
           .where( r1: 3, "r2.key.gt": 4 )
      
      expected =
        measures: "m1|m2"
        columns: "c1|c2"
        rows: "r1|r2"
        filters: "dimension::r1::key::eq::3|dimension::r2::key::gt::4"

      expect(query.toParams()).toEqual(expected)