Filter = this.Wonkavision.Filter

this.Wonkavision.Query = class Query
  constructor : (@client, query = {}) ->
    _this = this
    for axis in Wonkavision.AXIS_NAMES
      _this[axis] = this.select(axis)

    @listDelimiter = query.listDelimiter || "|"
    @axes = []
    @filters = []
    @selectedMeasures = []

    for axis in Wonkavision.AXIS_NAMES
      this[axis](query[axis]) if query[axis]?
    @measures(query.measures) if query.measures?
    @where(query.where) if query.where?
    @from(query.from) if query.from?
    @cube(query.cube) if query.cube?
    @aggregation(query.aggregation) if query.aggregation?


  cube : (cubeName) -> @cubeName = cubeName; this
  aggregation : (aggregationName) -> @aggregationName = aggregationName; this

  from : (cubeName, aggregationName = cubeName) ->
    @cubeName = cubeName
    @aggregationName = aggregationName
    this

  measures : (measures...) ->
    @selectedMeasures = @selectedMeasures.concat(_.flatten(measures))
    this

  where : (criteria = {}) ->
    @filters = @filters.concat(
      Filter.parse(filter, ".").withValue(value) for filter, value of criteria
    )
    this

  toParams : ->
    query =
      measures: @selectedMeasures.join(@listDelimiter)
      filters: (f.toString() for f in @filters).join(@listDelimiter)
    query[axisName] = @getAxis(axisName).join(@listDelimiter) for axisName in Wonkavision.AXIS_NAMES when @getAxis(axisName)
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



  