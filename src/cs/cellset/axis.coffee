Dimension = this.Wonkavision.Dimension

this.Wonkavision.Axis = class Axis
  constructor : (@name, @cellset, data, @startIndex) ->
    @levels = new LevelCollection()
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
        level = parent.levels.push new Level(childKey, parent, depth + @startIndex, member)
        @initLevels(childKey, level)

  registerCell : (cell) ->
    levelKey = cell.key[@startIndex..@startIndex]
    level = @levels.get(levelKey)
    level.registerCell(cell)

#----- Level -----------------------
this.Wonkavision.Level = class Level
  constructor : (@key, @parent, @keyIndex, @member) ->
    @axis = if @parent.axis? then @parent.axis else @parent
    @caption = @member.caption
    @depth = @keyIndex - @axis.startIndex

    @isEmpty = true
    @isLeaf = (@keyIndex == @axis.endIndex)
    @levels = new LevelCollection() unless @isLeaf

  leaves : (nonEmpty = false) -> if @isLeaf then [this] else @levels.leaves(nonEmpty)

  registerCell : (cell) ->
    @isEmpty = false
    unless @isLeaf
      childIndex = @keyIndex + 1
      childKey = cell.key[@axis.startIndex..childIndex]
      child = @levels.get(childKey)
      child.registerCell(cell)

#----- Level Collection ----------------------------------
this.Wonkavision.LevelCollection = class LevelCollection
  constructor : (levels = [], @isNonEmpty = false) ->
    @levels = []
    @length = 0
    _.each levels, (level) => @push(level)

  get : (key) -> _.find @levels, (l) -> l.key.toString() == key.toString()

  push : (level) -> @length += 1; @levels.push(level); level

  each : (callback) -> _.each(@levels, callback)

  nonEmpty : ->
    new LevelCollection( _.filter( @levels, (level) -> !level.isEmpty ), true )

  leaves : (nonEmpty = @isNonEmpty) ->
    levels = if nonEmpty then @nonEmpty().levels else @levels
    _.flatten( _.map( levels, (level) -> level.leaves(nonEmpty) ))

  at : (idx) -> @levels[idx]

  toArray : -> @levels