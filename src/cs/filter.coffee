this.Wonkavision.Filter = class Filter
  constructor : (@name, options = {}) ->
    @operator = options.operator || "eq"
    @memberType = options.memberType || "dimension"
    @value = options.value
    @attributeName = options.attributeName || if @isDimension then "key" else "count"
    @operators = ["eq","ne","gt","gte","lt","lte","in","nin"]

  isDimension : -> @memberType == "dimension"

  isMeasure : -> @memberType == "measure"

  isFact: => @memberType == "fact"

  toString : -> [@memberType,@name,@attributeName,@operator,(@value || "").toString()].join("::")

  parse : (filterString, delim = "::") ->
    parts = filterString.split(delim)
    if parts[0] == "dimension" || parts[0] == "measure" || parts[0] == "fact"
      @memberType = parts.shift()
      @name = parts.shift()
    else
      @name = parts.shift()

    @attributeName = parts.shift() || @attributeName
    @operator = parts.shift() || @operator
    @value = parts.shift() || @value
    this

  withValue : (val) -> @value = val; this


this.Wonkavision.Filter.parse = (filterString, delim = "::") ->
  new Filter("").parse(filterString, delim)

      

    







     