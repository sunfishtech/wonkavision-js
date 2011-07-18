Client = this.Wonkavision.Client
test_data = this.test_data

describe "Client", ->
  it "should be able to be instantiated", ->
    expect(Client()).not.toBeNull()
  