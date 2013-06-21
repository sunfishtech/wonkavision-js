this.Wonkavision = class Wonkavision
  this.Client = class Client
    constructor : (options={}) ->
      @url = options.url || ""
      @facts = {}
      @aggregations = {}

    query : (options = {}) ->
      new Wonkavision.Query(this, options)

    execute : (query, options) ->
      raw = options.raw
      success = (data) =>
        if data.json.error?
          options.error(data.json.error)
        else
          response = if raw then data else new Wonkavision.Cellset(data.json, query)
          options.success(response)

      error = options.error || () ->

      @get("query", query.toParams(), success, error)
      this

    get : (path, params, success, error) ->
      uri = @url + if @url.substr(-1) == "/" then "" else "/"
      uri = uri + path
      Wonkavision.Remote.get(uri, data : params, success: success, error: error)

this.Wonkavision.AXIS_NAMES = ["columns","rows","pages","chapters","sections"]