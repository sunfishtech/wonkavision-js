Filter = this.Wonkavision.Filter
MemberReference = this.Wonkavision.MemberReference

this.Wonkavision.Query = class Query
  constructor : (@client, query = {}) ->
    _this = this
    for axis in Wonkavision.AXIS_NAMES
      _this[axis] = this.select(axis)

    @listDelimiter = query.listDelimiter || "|"
    @axes = []
    @filters = []
    @selectedMeasures = []
    @order_by_attributes = []
    @selected_attributes = []
    @topFilter = null

    for axis in Wonkavision.AXIS_NAMES
      this[axis](query[axis]) if query[axis]?
    @measures(query.measures) if query.measures?
    @where(query.where) if query.where?
    @from(query.from) if query.from?
    @order(query.order) if query.order?
    @attributes(query.attributes) if query.attributes?
    @top(query.top) if query.top?
    @originalQuery = query


  cube : (cubeName) -> @cubeName = cubeName; this
  from : (cubeName) ->
    @cubeName = cubeName
    this

  measures : (measures...) ->
    @selectedMeasures = @selectedMeasures.concat(_.flatten(measures))
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

  top: (topFilter) ->
    @topFilter = {}
    @topFilter.count = topFilter.count
    @topFilter.dimension = topFilter.dimension
    @topFilter.measure = topFilter.measure
    @topFilter.exclude = _.compact(_.flatten([topFilter.exclude]))
    if topFilter.where
      @topFilter.filters = (Filter.parse(filter, ".").withValue(value) for filter, value of topFilter.where)

  toParams : ->
    query = from: @cubeName
    query.measures = @selectedMeasures.join(@listDelimiter) unless @selectedMeasures.length < 1
    query.filters = (f.toString() for f in @filters).join(@listDelimiter) unless @filters.length < 1
    query.order = (a.toString() for a in @order_by_attributes).join(@listDelimiter) unless @order_by_attributes.length < 1
    query.attributes = (a.toString() for a in @selected_attributes).join(@listDelimiter) unless @selected_attributes.length < 1
    query[axisName] = @getAxis(axisName).join(@listDelimiter) for axisName in Wonkavision.AXIS_NAMES when @getAxis(axisName)
    if @topFilter?
      query["top_filter_count"] = @topFilter.count
      query["top_filter_dimension"] = @topFilter.dimension
      query["top_filter_measure"] = @topFilter.measure if @topFilter.measure?
      query["top_filter_exclude"] = (@topFilter.exclude).join(@listDelimiter) if @topFilter.exclude?
      query["top_filter_filters"] = (f.toString() for f in @topFilter.filters).join(@listDelimiter) if @topFilter.filters

    query["from"] = @cubeName
    query

  toString : -> toHash().toString()

  execute : (options = {}) ->
    @client.execute(this, options)

  getAxis : (axisName) -> @axes[Wonkavision.AXIS_NAMES.indexOf(axisName)]

  select : (axis) ->
    (dimensions...) =>
      ordinal = Wonkavision.AXIS_NAMES.indexOf(axis)
      if (ordinal >= 0)
        if @axes.length > ordinal
          dimensions = @axes[ordinal].concat(dimensions)
        @axes[ordinal] = _.flatten(dimensions)
      this



  