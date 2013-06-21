this.Wonkavision.MemberReference = class MemberReference
  constructor : (@name, options = {}) ->
    @memberType = options.memberType || "dimension"
    @value = options.value
    @attributeName = options.attributeName || if @isDimension then "key" else "count"
    @order = "asc"

  isDimension : -> @memberType == "dimension"

  isMeasure : -> @memberType == "measure"

  isFact : -> @membertype == "fact"

  toString : -> [@memberType,@name,@attributeName,@order].join("::")

  parse : (filterString, delim = "::") ->
    parts = filterString.split(delim)
    if parts[0] == "dimension" || parts[0] == "measure" || parts[0] == "fact"
      @memberType = parts.shift()
      @name = parts.shift()
    else
      @name = parts.shift()

    @attributeName = parts.shift() || @attributeName
    @order = parts.shift() || @order
    this

this.Wonkavision.MemberReference.parse = (filterString, delim = "::") ->
  new MemberReference("").parse(filterString, delim)

      

    







     