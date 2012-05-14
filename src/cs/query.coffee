this.Wonkavision.Query = class Query
	constructor : (@client, options = {}) ->
		for axis in @client.axisNames =>
			this[axis] = (dimensions...) =>
				select(axis,dimensions)
				this

		@listDelimiter = options.listDelimiter || "|"
		@axes = []
		@filters = []
		@measures = []
		@cubeName = options.cubeName || ""
		@aggregationName = options.aggregationName || ""

	cube : (cubeName) -> @cubeName = cubeName; this
	aggregation : (aggregationName) -> @aggregationName = aggregationName; this

	measures : (measures...) ->
		return @measures if measures.length < 1
		@measures.concat(measures)
		this

	where : (criteria = {}) ->
		this

	validate : ->

	toHash : ->

	execute : (options = {}) ->

	select : (axis, dimensions) ->
		ordinal = @client.axisNames.indexOf(axis)
		if (ordinal >= 0)
			@axes[ordinal] = dimensions



	