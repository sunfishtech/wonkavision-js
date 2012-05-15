(function() {
  var Client, client, test_data;
  Client = this.Wonkavision.Client;
  test_data = this.test_data;
  client = null;
  beforeEach(function() {
    return client = new Client();
  });
  describe("Client", function() {
    it("should be able to be instantiated", function() {
      return expect(client).not.toBeNull();
    });
    describe("query", function() {
      return it("should have a referenece to the cliet", function() {
        return expect(client.query().client).toEqual(client);
      });
    });
    return describe("execute", function() {
      return it("should execute the provided query", function() {
        return client.query().measures("m1", "m2").columns("c1", "c2").from("payspeed").execute({
          raw: true,
          error: function(err) {
            return console.debug(err);
          },
          success: function(data) {
            return console.debug(data);
          }
        });
      });
    });
  });
}).call(this);
