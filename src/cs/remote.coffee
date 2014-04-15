#This code is lifted almost verabtim from the Miso Dataset project.
#https://github.com/misoproject/dataset/blob/master/src/importers/remote.js
#I did not include the JSONP bits, if that is ever desired
#please see the above implementation, which includes JSONP
this.Wonkavision.Remote = class Remote
  constructor : (options = {}) ->

  xhr : (options) ->
    url = options.url

    settings = @createSettings(url, options)
    settings.ajax = settings.xhr()

    if settings.ajax
      @prepareUrl(settings)
      settings.ajax.open(settings.type, settings.url, settings.async)
      settings.ajax.setRequestHeader("Accept","application/json");
      settings.ajax.send(settings.data || null)

      @httpData(settings)

  prepareUrl : (settings) ->
    if settings.type == "GET" && settings.data
      settings.url += if /\?/.test(settings.url) then "&" else "?"
      settings.url += @toParams(settings.data)
      settings.data = null


  createSettings : (url, options = {}) ->
    url : url
    data : options.data || ""
    success : options.success || ->
    error : options.error || () ->
    type : options.type || "GET"
    async : options.async || true
    xhr : -> new window.XMLHttpRequest()

  toParams : (data = {}) ->
    parts = []
    parts.push "#{name}=#{value}" for name, value of data
    encodeURI(parts.join("&"))

  httpData : (settings) ->
    settings.ajax.onreadystatechange = ->
      if settings.ajax.readyState == 4
        try
          json = JSON.parse(settings.ajax.responseText)
        catch error
          #swallow it down, one gulp
          console.log "Could not parse response (#{settings.ajax.responseText}) as JSON:#{error}"

        data = 
          xml: settings.ajax.responseXML
          text: settings.ajax.responseText
          json: json

        if /(2..)/.test settings.ajax.status
          settings.success.call settings.ajax, data
        else 
          console.log("There was an error processing a Wonkavision data request:" + settings.ajax.statusText)
          if settings.error
            settings.error.call null, settings.ajax.statusText
        data
      else
        null

this.Wonkavision.Remote.ajax = (options) ->
  new Remote().xhr(options)

this.Wonkavision.Remote.get = (url, options) ->
  options.url = url
  new Remote().xhr(options)

this.Wonkavision.Remote.post = (url, options) ->
  options.url = url
  options.type = "POST"
  new Remote().xhr(options)

        
  
