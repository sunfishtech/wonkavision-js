
this.Wonkavision = class Wonkavision
  this.Client = class Client
    constructor : (options={}) ->
      @url = options.url if options.url?
      @facts = {}
      @aggregations = {}

    



