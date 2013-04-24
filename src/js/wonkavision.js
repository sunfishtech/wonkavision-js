(function() {
  var Wonkavision;

  this.Wonkavision = Wonkavision = (function() {
    var Client;

    function Wonkavision() {}

    Wonkavision.Client = Client = (function() {
      function Client(options) {
        if (options == null) {
          options = {};
        }
        this.url = options.url || "";
        this.facts = {};
        this.aggregations = {};
      }

      Client.prototype.query = function(options) {
        if (options == null) {
          options = {};
        }
        return new Wonkavision.Query(this, options);
      };

      Client.prototype.execute = function(query, options) {
        var error, raw, success,
          _this = this;

        raw = options.raw;
        success = function(data) {
          var response;

          response = raw ? data : new Wonkavision.Cellset(data.json, query);
          return options.success(response);
        };
        error = options.error || function() {};
        this.get("query", query.toParams(), success, error);
        return this;
      };

      Client.prototype.get = function(path, params, success, error) {
        var uri;

        uri = this.url + (this.url.substr(-1) === "/" ? "" : "/");
        uri = this.url + path;
        return Wonkavision.Remote.get(uri, {
          data: params,
          success: success,
          error: error
        });
      };

      return Client;

    })();

    return Wonkavision;

  })();

  this.Wonkavision.AXIS_NAMES = ["columns", "rows", "pages", "chapters", "sections"];

}).call(this);
