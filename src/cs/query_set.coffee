Query = this.Wonkavision.Query
Client = this.Wonkavision.Client

this.Wonkavision.QuerySet = class QuerySet
  constructor : (options = {}) ->
    @serverUrl = options.url || options.serverUrl || ""
    @client = options.client || new Client(@serverUrl)
    @queries = []
    @global = new Query()

  addQuery : (query = {}) ->
    newQuery = @client.query(query)
    @queries.push @client.query(query)