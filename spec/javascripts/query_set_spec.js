(function() {
  var Client, Query, QuerySet, client, querySet, test_data;
  Client = this.Wonkavision.Client;
  Query = this.Wonkavision.Query;
  QuerySet = this.Wonkavision.QuerySet;
  test_data = this.test_data;
  client = null;
  querySet = null;
  beforeEach(function() {
    client = new Client();
    return querySet = new QuerySet();
  });
  describe("QuerySet", function() {
    it("should be able to be instantiated", function() {
      return expect(new QuerySet()).not.toBeNull;
    });
    return describe("addQuery", function() {
      return it("should append the specified query to the queries collection", function() {
        querySet.addQuery({
          columns: ["hi"]
        });
        querySet.addQuery({
          columns: ["ho"]
        });
        expect(querySet.queries.length).toEqual(2);
        expect(querySet.queries[0].axes[0]).toEqual(["hi"]);
        return expect(querySet.queries[1].axes[0]).toEqual(["ho"]);
      });
    });
  });
}).call(this);
