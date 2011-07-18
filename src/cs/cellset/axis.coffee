Dimension = this.Wonkavision.Dimension

this.Wonkavision.Axis = class Axis
	constructor : (@cellset, data, @start_index) ->
		@members ={}
		@dimensions = []
		@dimensionNames = []
		for dimension in data.dimensions
			@dimensions.push new Dimension(dimension)
			@dimensionNames.push dimension.name
			
		@end_index = @start_index + @dimensions.length - 1


