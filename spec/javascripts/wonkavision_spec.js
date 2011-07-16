(function() {
  var Wonkavision;
  Wonkavision = this.Wonkavision;
  describe('Wonkavision', function() {
    return describe("Client", function() {
      return it("should be able to be instantiated", function() {
        return expect(new Wonkavision.Client()).not.toBeNull();
      });
    });
  });
}).call(this);
