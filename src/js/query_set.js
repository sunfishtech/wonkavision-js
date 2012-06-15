(function() {
  var Client, Query, QuerySet;
  Query = this.Wonkavision.Query;
  Client = this.Wonkavision.Client;
  this.Wonkavision.QuerySet = QuerySet = (function() {
    function QuerySet(options) {
      if (options == null) {
        options = {};
      }
      this.serverUrl = options.url || options.serverUrl || "";
      this.client = options.client || new Client(this.serverUrl);
      this.queries = [];
      this.global = new Query();
    }
    QuerySet.prototype.addQuery = function(query) {
      var newQuery;
      if (query == null) {
        query = {};
      }
      newQuery = this.client.query(query);
      return this.queries.push(this.client.query(query));
    };
    return QuerySet;
  })();
}).call(this);
