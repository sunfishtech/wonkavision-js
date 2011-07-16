Wonkavision = this.Wonkavision

describe 'Wonkavision', ->
  describe "Client", ->
    it "should be able to be instantiated", ->
      expect(new Wonkavision.Client()).not.toBeNull()
