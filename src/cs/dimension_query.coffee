Filter = this.Wonkavision.Filter
MemberReference = this.Wonkavision.MemberReference

this.Wonkavision.DimensionQuery = class DimensionQuery
  constructor : (@client, query = {}) ->
    _this = this

    @listDelimiter = query.listDelimiter || "|"
    @order_by_attributes = []
    @selected_attributes = []
    @filters = query.filters || []

    @where(query.where) if query.where?
    @from(query.from) if query.from?
    @order(query.order) if query.order?
    @attributes(query.attributes) if query.attributes?
    @originalQuery = query


  dimension : (dimName) -> @dimensionName = dimName; this
  from : (dimName) ->
    @dimensionName = dimName
    this

  where : (criteria = {}) ->
    @filters = @filters.concat(
      Filter.parse(filter, ".").withValue(value) for filter, value of criteria
    )
    this

  order: (attributes...) ->
    @order_by_attributes = @order_by_attributes.concat(
      MemberReference.parse(attribute, ".") for attribute in _.flatten(attributes)
    )
    this

  attributes: (attributes...) ->
    @selected_attributes = @selected_attributes.concat(
      MemberReference.parse(attribute, ".") for attribute in _.flatten(attributes)
    )
    this

  toParams : ->
    query = from: @dimensionName
    query.filters = (f.toString() for f in @filters).join(@listDelimiter) unless @filters.length < 1
    query.order = (a.toString() for a in @order_by_attributes).join(@listDelimiter) unless @order_by_attributes.length < 1
    query.attributes = (a.toString() for a in @selected_attributes).join(@listDelimiter) unless @selected_attributes.length < 1
    query["from"] = @dimensionName
    query

  toString : -> toHash().toString()

  execute : (options = {}) ->
    @client.executeDimension(this, options)



  