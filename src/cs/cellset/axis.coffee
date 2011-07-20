Dimension = this.Wonkavision.Dimension

this.Wonkavision.Axis = class Axis
	constructor : (@cellset, data, @startIndex) ->
		@members ={}
		@dimensions = []
		@dimensionNames = []
		for dimension in data.dimensions
			@dimensions.push new Dimension(dimension)
			@dimensionNames.push dimension.name
			
		@endIndex = @startIndex + @dimensions.length - 1

	dimensionNames : ->
		d.name for d in this.dimensions
	
	totals : () ->
		coords = if coord? then coord.toString() else coord for coord in arguments
		this.members[coords] ||= new MemberInfo(this, coords)

	class MemberInfo
		constructor : (@axis, @key) ->
			@cellKey = (null for i in [0...@axis.startIndex]) || []
			@cellKey.push(@key)
			@totals = @axis.cellset.cell(@cellKey)
			@descendentKeys = []
			for key, val in this.axis.cellset.cells
				if key.length > @cellKey.length &&
					key.length <= this.axis.endIndex + 1 &&
					key[0..@cellKey.length] == @cellKey
						@descendentKeys.push key
			@empty = @totals.empty

		

		


