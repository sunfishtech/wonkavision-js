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
        if (options.url != null) {
          this.url = options.url;
        }
        this.facts = {};
        this.aggregations = {};
      }
      return Client;
    })();
    return Wonkavision;
  })();
}).call(this);
