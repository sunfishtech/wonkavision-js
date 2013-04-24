(function() {
  var Remote;

  this.Wonkavision.Remote = Remote = (function() {
    function Remote(options) {
      if (options == null) {
        options = {};
      }
    }

    Remote.prototype.xhr = function(options) {
      var settings, url;

      url = options.url;
      settings = this.createSettings(url, options);
      settings.ajax = settings.xhr();
      if (settings.ajax) {
        this.prepareUrl(settings);
        settings.ajax.open(settings.type, settings.url, settings.async);
        settings.ajax.send(settings.data || null);
        return this.httpData(settings);
      }
    };

    Remote.prototype.prepareUrl = function(settings) {
      if (settings.type === "GET" && settings.data) {
        settings.url += /\?/.test(settings.url) ? "&" : "?";
        settings.url += this.toParams(settings.data);
        return settings.data = null;
      }
    };

    Remote.prototype.createSettings = function(url, options) {
      if (options == null) {
        options = {};
      }
      return {
        url: url,
        data: options.data || "",
        success: options.success || function() {},
        error: options.error || function() {},
        type: options.type || "GET",
        async: options.async || true,
        xhr: function() {
          return new window.XMLHttpRequest();
        }
      };
    };

    Remote.prototype.toParams = function(data) {
      var name, parts, value;

      if (data == null) {
        data = {};
      }
      parts = [];
      for (name in data) {
        value = data[name];
        parts.push("" + name + "=" + value);
      }
      return encodeURI(parts.join("&"));
    };

    Remote.prototype.httpData = function(settings) {
      return settings.ajax.onreadystatechange = function() {
        var data, error, json;

        if (settings.ajax.readyState === 4) {
          try {
            json = JSON.parse(settings.ajax.responseText);
          } catch (_error) {
            error = _error;
            console.log("Could not parse response (" + settings.ajax.responseText + ") as JSON:" + error);
          }
          data = {
            xml: settings.ajax.responseXML,
            text: settings.ajax.responseText,
            json: json
          };
          if (/(2..)/.test(settings.ajax.status)) {
            settings.success.call(settings.ajax, data);
          } else {
            console.log("There was an error processing a Wonkavision data request:" + settings.ajax.statusText);
            if (settings.error) {
              settings.error.call(null, settings.ajax.statusText);
            }
          }
          return data;
        } else {
          return null;
        }
      };
    };

    return Remote;

  })();

  this.Wonkavision.Remote.ajax = function(options) {
    return new Remote().xhr(options);
  };

  this.Wonkavision.Remote.get = function(url, options) {
    options.url = url;
    return new Remote().xhr(options);
  };

  this.Wonkavision.Remote.post = function(url, options) {
    options.url = url;
    options.type = "POST";
    return new Remote().xhr();
  };

}).call(this);
