(function() {
  var Client, test_data;
  Client = this.Wonkavision.Client;
  test_data = this.test_data;
  describe("Client", function() {
    return it("should be able to be instantiated", function() {
      return expect(Client()).not.toBeNull();
    });
  });
}).call(this);
