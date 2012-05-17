Dimension = this.Wonkavision.Dimension


this.Wonkavision.Axis = class Axis
  constructor : (@name, @cellset, data, @startIndex) ->
    @levels = {}
    @dimensions = []
    @dimensionNames = []
    for dimension in data.dimensions
      @dimensions.push new Dimension(this, dimension)
      @dimensionNames.push dimension.name
      
    @endIndex = @startIndex + @dimensions.length - 1
    @initLevels()

  dimensionNames : ->
    d.name for d in this.dimensions

  initLevels : (key = [], parent = this) ->
    depth = key.length
    if depth < @dimensions.length
      for member in @dimensions[depth].members
        childKey = key.slice(0)
        childKey.push(member.key)
        level = parent.levels[childKey] = new Level(childKey, parent, depth + @startIndex)
        @initLevels(childKey, level)

  registerCell : (cell) ->
    levelKey = cell.key[@startIndex..@startIndex]
    level = @levels[levelKey]
    level.registerCell(cell)

this.Wonkavision.Level = class Level
  constructor : (@key, @parent, @keyIndex) ->
    @axis = if @parent.axis? then @parent.axis else @parent
    @name = @key.slice(-1)[0] if @key?
    @depth = @keyIndex - @axis.startIndex

    @isEmpty = true
    @isLeaf = (@keyIndex == @axis.endIndex)
    @isRoot = (@depth == 0)
    unless @isLeaf
      @levels = {}

  registerCell : (cell) ->
    @isEmpty = false
    unless @isLeaf
      childIndex = @keyIndex + 1
      childKey = cell.key[@axis.startIndex..childIndex]
      child = (@levels[childKey] ||= new Level(childKey, this, childIndex))
      child.registerCell(cell)