Filter = this.Wonkavision.Filter

this.Wonkavision.Query = class Query
  constructor : (@client, options = {}) ->
    _this = this
    for axis in Wonkavision.AXIS_NAMES
      _this[axis] = this.select(axis)

    @listDelimiter = options.listDelimiter || "|"
    @axes = []
    @filters = []
    @selectedMeasures = []
    @cubeName = options.cubeName || options.cube 
    @aggregationName = options.aggregationName || options.aggregation

  cube : (cubeName) -> @cubeName = cubeName; this
  aggregation : (aggregationName) -> @aggregationName = aggregationName; this

  from : (cubeName, aggregationName = cubeName) ->
    @cubeName = cubeName
    @aggregationName = aggregationName
    this

  measures : (measures...) ->
    @selectedMeasures = @selectedMeasures.concat(measures)
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
        @axes[ordinal] = dimensions
      this



  