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
    unless cell.empty
      levelKey = cell.key[@startIndex..@startIndex]
      level = @levels.get(levelKey)
      level.registerCell(cell)

  appendMeasures : -> @levels.appendMeasures(@cellset)


#----- Level -----------------------
this.Wonkavision.Level = class Level
  constructor : (@key, @parent, @keyIndex, @member) ->
    @axis = if @parent.axis? then @parent.axis else @parent
    @caption = @member.caption
    @depth = @keyIndex - @axis.startIndex

    @isEmpty = true
    @isLeaf = (@keyIndex == @axis.endIndex)
    @levels = new LevelCollection() unless @isLeaf
    @cellKey = @key

  leaves : (nonEmpty = false) -> if @isLeaf then [this] else @levels.leaves(nonEmpty)

  registerCell : (cell) ->
    @isEmpty = false
    unless @isLeaf
      childIndex = @keyIndex + 1
      childKey = cell.key[@axis.startIndex..childIndex]
      child = @levels.get(childKey)
      child.registerCell(cell)

#------Measure Level--------------------------------------------
this.Wonkavision.MeasureLevel = class MeasureLevel extends Level
  constructor : (@measureName, parentLevel) ->
    @key = parentLevel.key.concat ["@#{measureName}"]
    @parent = parentLevel
    @axis = parentLevel.axis
    @caption = measureName
    @depth = parentLevel.depth + 1
    @isEmpty = parentLevel.isEmpty
    @isLeaf = true
    parentLevel.isLeaf = false
    @isMeasures = true
    @cellKey = @key[0..-2]

#----- Level Collection ----------------------------------
this.Wonkavision.LevelCollection = class LevelCollection
  constructor : (levels = [], @isNonEmpty = false) ->
    @levels = []
    @length = 0
    _.each levels, (level) => @push(level)

  get : (key) -> _.find @levels, (l) -> l.key.toString() == key.toString()

  push : (level) ->
    @invalidateCache()
    @length += 1
    @levels.push(level)
    level

  each : (callback) -> _.each(@levels, callback)

  map : (callback) -> _.each(@levels, callback)

  nonEmpty : ->
    new LevelCollection( _.filter( @levels, (level) -> !level.isEmpty ), true )

  leaves : (nonEmpty) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    unless @leafCache?
      levels = if nonEmpty then @nonEmpty().levels else @levels
      @leafCache = _.flatten( _.map( levels, (level) -> level.leaves(nonEmpty) ))
    @leafCache

  at : (idx) -> @levels[idx]

  toArray : -> @levels

  flatten : (nonEmpty, levels = []) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    @map (level) ->
      unless nonEmpty and level.isEmpty
        levels.push level
        level.levels.flatten(nonEmpty, levels) unless level.isLeaf
    levels

  partitionH : (nonEmpty) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    levels = @flatten(nonEmpty)
    reducer = (memo, level) ->
      curpart = _.last memo
      lastlevel = _.last(curpart)
      unless lastlevel && lastlevel.depth >= level.depth
        curpart.push level
      else
        memo.push [level]
      memo

    _.reduce levels, reducer, [[]]

  partitionV : (nonEmpty) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    levels = @flatten(nonEmpty)
    reducer = (memo, level) ->
      group = (memo[level.depth] ||= [])
      group.push level; memo

    _.reduce levels, reducer, []

  appendMeasures : (cellset) ->
    measureNames = cellset.measureNames
    prevLeaves = @leaves()
    _.each prevLeaves, (pLeaf) ->
      pLeaf.levels = new LevelCollection(
        _.map measureNames, (mname) ->
          new MeasureLevel(mname, pLeaf)
      )
    @invalidateCache(true)

  invalidateCache : (recursive = false) ->
    @leafCache = null
    if recursive
      @each (l) -> l.levels.invalidateCache() if l.levels?
