Client = this.Wonkavision.Client
test_data = this.test_data

client = null

beforeEach ->
  client = new Client()

describe "Client", ->
  it "should be able to be instantiated", ->
    expect(client).not.toBeNull()

  describe "query", ->
    it "should have a referenece to the cliet", ->
      expect(client.query().client).toEqual(client)

  describe "execute", ->
    it "should execute the provided query", ->
      client.query()
        .measures("m1","m2")
        .columns("c1","c2")
        .from("payspeed")
        .execute
          raw:true
          error : (err) -> alert(err)
          success : (data) -> alert(data)


  