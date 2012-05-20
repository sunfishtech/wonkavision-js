Dimension = this.Wonkavision.Dimension

this.Wonkavision.Axis = class Axis
  constructor : (@name, @cellset, data, @startIndex) ->
    @dimensions = []
    @dimensionNames = []
    for dimension, idx in data.dimensions
      @dimensions.push new Dimension(this, dimension, @startIndex + idx)
      @dimensionNames.push dimension.name
      
    @endIndex = @startIndex + @dimensions.length - 1

  dimensionNames : ->
    d.name for d in this.dimensions

