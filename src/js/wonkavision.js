(function() {
  var Wonkavision;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
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
        this.axisNames = ["columns", "rows", "pages", "chapters", "sections"];
      }
      Client.prototype.query = function(cubeName, options) {
        if (options == null) {
          options = {};
        }
        return new Wonkavision.Query(this, options);
      };
      Client.prototype.execute = function(query, options) {
        var data, error, raw, success;
        raw = options.raw;
        success = __bind(function(data) {
          var response;
          response = raw ? data : new Wonkavision.Cellset(data, query);
          return options.success(response);
        }, this);
        error = options.error || function() {};
        data = this.get("query/" + query.cubeName + "/" + query.aggregationName, query.toParams(), success, error);
        if (raw) {
          return data;
        } else {
          return new Wonkavision.Cellset(data, query);
        }
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
}).call(this);
