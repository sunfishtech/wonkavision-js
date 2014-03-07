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

      Client.prototype.dimensionQuery = function(options) {
        if (options == null) {
          options = {};
        }
        return new Wonkavision.DimensionQuery(this, options);
      };

      Client.prototype.executeDimension = function(query, options) {
        var error, path, success,
          _this = this;

        success = function(data) {
          var response;

          if (data.json.error != null) {
            optons.error(data.json.error);
          } else {
            response = data.json;
          }
          return options.success(response);
        };
        error = options.error || function() {};
        path = "dimension_query";
        this.get(path, query.toParams(), success, error);
        return this;
      };

      Client.prototype.execute = function(query, options) {
        var error, path, raw, success,
          _this = this;

        raw = options.raw;
        success = function(data) {
          var response;

          if (data.json.error != null) {
            return options.error(data.json.error);
          } else {
            response = raw ? data : options.facts ? data.json.data : new Wonkavision.Cellset(data.json, query);
            return options.success(response);
          }
        };
        error = options.error || function() {};
        path = options.facts ? "facts" : "query";
        this.get(path, query.toParams(), success, error);
        return this;
      };

      Client.prototype.get = function(path, params, success, error) {
        var uri;

        uri = this.url + (this.url.substr(-1) === "/" ? "" : "/");
        uri = uri + path;
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
