this.Wonkavision.PivotTable = class PivotTable
  constructor : (@cellset, options = {}) ->
    _.bindAll this, "cellValues", "cellValue"

    @axes = _.map @cellset.axes, (axis) =>
      this[axis.name] = new PivotTable.Axis(axis.name, axis.dimensions.slice(0), this)
    @measuresAxis = options.measuresAxis || options.measuresOn || "columns"
    @initializeAxes()
    @seriesCells = {}

    for key, cell of @cellset.cells
      axis.registerCell(cell) for axis in @axes
      if @seriesDimension?
        skey = cell.key[@seriesDimension.keyIndex]
        sc = (@seriesCells[skey] ||= [])
        sc.push cell

    console.debug this

    this[@measuresAxis]?.appendMeasures() if @measuresAxis?  

    #for display purposes, single axis queries render using rows
    @pivot() unless @rows? && !@rows.isEmpty

  initializeAxes : -> axis.initialize() for axis in @axes

  pivot : ->
    r = @rows
    @rows = @columns
    @columns = r

  cellValues : (rowMemberOrMembers) ->
    rowMember = if _.isArray(rowMemberOrMembers) then _.last(rowMemberOrMembers) else rowMemberOrMembers
    if @columns && !@columns.isEmpty
      _.map @columns.members.nonEmpty().leaves(), (colMember) =>
        @cellValue( rowMember, colMember )
    else
      [ @cellValue( rowMember ) ]

  cellValue : (keyMembers...) -> @extractValue(keyMembers)
    
  extractValue : (keyMembers, measureName) ->
    cellKey = _.flatten(_.map(_.sortBy(_.compact(keyMembers), (m) -> m.keyIndex), (m) -> m.cellKey()))
    cell = @cellset.cells[cellKey]
    if cell?
      measureName = measureName || @findMeasureName(keyMembers) || @cellset.measureNames[0]
      cell[measureName].value

  findMeasureName : (keyMembers) ->
    _.find( keyMembers, (m) -> m.measureName? )?.measureName

#----ChartTable--------------------------------------------------
this.Wonkavision.ChartTable = class ChartTable extends PivotTable
  constructor : (cellset, options = {}) ->
    _.bindAll this, "cellValues", "cellValue"
    @seriesSource = options.seriesSource || options.seriesFrom || 
      if cellset.measureNames.length > 1 then "measures" else "rows"
    super(cellset, options)   

  initializeAxes : ->
    @xAxisDimension = @columns.dimensions.pop()
    @seriesDimension = if @seriesSource != "measures" && this[@seriesSource]?
      this[@seriesSource].dimensions.pop()
    if @seriesSource == "measures" then @measuresAxis = null
    super()

  cellValue : (keyMembers...) ->
    if @seriesSource == "measures"
      _.map @cellset.measureNames, (measureName) =>
        name : measureName
        data : @seriesFromMeasure keyMembers, measureName
    else if @seriesDimension?      
      seriesMembers = _.filter @seriesDimension.members, (m) => @seriesCells[m.key]?
      _.map seriesMembers, (seriesMember) =>
        name : seriesMember.caption
        data : @seriesFromMember keyMembers, seriesMember

  seriesFromMeasure : (keyMembers, measureName) ->
    _.map @xAxisDimension.members, (x) =>
      xMember = Member.fromDimensionMember(x)
      pivotMember = new MeasureMember(measureName, xMember)
      key = keyMembers.concat [pivotMember]
      x : x.key
      y : @extractValue(key, measureName)

  seriesFromMember : (keyMembers, member) ->
    pivotMember = Member.fromDimensionMember(member)
    _.map @xAxisDimension.members, (x) =>
      xMember = Member.fromDimensionMember(x)
      key = keyMembers.concat [pivotMember, xMember]
      x : x.key
      y : @extractValue(key)

#---Axis------------------------------------
this.Wonkavision.PivotTable.Axis = class Axis
  constructor : (@name, @dimensions, @pivotTable) ->
    @members = new MemberCollection()

  initialize : ->
    unless @isEmpty = @dimensions.length < 1
      @startIndex = @dimensions[0].keyIndex
      @endIndex = @startIndex + @dimensions.length - 1
      @initLevels()

  initLevels : (key = [], parent = this) ->
    depth = key.length
    if depth < @dimensions.length
      for member in @dimensions[depth].members
        member.isEmpty = true
        childKey = key.slice(0)
        childKey.push(member.key)
        level = parent.members.push new Member(childKey, parent, depth + @startIndex, member)
        @initLevels(childKey, level)

  registerCell : (cell) ->
    unless cell.empty || @isEmpty
      levelKey = cell.key[@startIndex..@startIndex]
      level = @members.get(levelKey)
      level.registerCell(cell)

  appendMeasures : -> @members.appendMeasures(@pivotTable.cellset)

#----- Member -----------------------
this.Wonkavision.PivotTable.Member = class Member
  constructor : (@key, @parent, @keyIndex, @member) ->
    @axis = if @parent?.axis? then @parent.axis else @parent
    @caption = @member.caption
    @depth = if @axis then @keyIndex - @axis.startIndex else 0

    @isEmpty = true
    @isLeaf = if @axis then (@keyIndex == @axis.endIndex) else 0
    @members = new MemberCollection() unless @isLeaf

  cellKey : -> @key

  leaves : (nonEmpty = false) -> if @isLeaf then [this] else @members.leaves(nonEmpty)

  registerCell : (cell) ->
    @isEmpty = false
    @member.isEmpty = false
    unless @isLeaf
      childIndex = @keyIndex + 1
      childKey = cell.key[@axis.startIndex..childIndex]
      child = @members.get(childKey)
      child.registerCell(cell)

this.Wonkavision.PivotTable.Member.fromDimensionMember = (member) ->
  new Member([member.key], null, member.dimension.keyIndex, member)

#------Measure Member--------------------------------------------
this.Wonkavision.PivotTable.MeasureMember = class MeasureMember extends Member
  constructor : (@measureName, parentMember) ->
    @key = parentMember.key.concat ["@#{measureName}"]
    @parent = parentMember
    @axis = parentMember.axis
    @caption = measureName
    @depth = parentMember.depth + 1
    @isEmpty = parentMember.isEmpty
    @isLeaf = true
    parentMember.isLeaf = false
    @isMeasure = true
    @keyIndex = parentMember.keyIndex
  
  cellKey : -> @key[0..-2]

#----- Member Collection ----------------------------------
this.Wonkavision.PivotTable.MemberCollection = class MemberCollection
  constructor : (members = [], @isNonEmpty = false) ->
    @members = []
    @length = 0
    _.each members, (level) => @push(level)

  get : (key) -> _.find @members, (l) -> l.key.toString() == key.toString()

  push : (level) ->
    @invalidateCache()
    @length += 1
    @members.push(level)
    level

  each : (callback) -> _.each(@members, callback)

  map : (callback) -> _.each(@members, callback)

  nonEmpty : ->
    new MemberCollection( _.filter( @members, (level) -> !level.isEmpty ), true )

  leaves : (nonEmpty) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    unless @leafCache?
      members = if nonEmpty then @nonEmpty().members else @members
      @leafCache = _.flatten( _.map( members, (level) -> level.leaves(nonEmpty) ))
    @leafCache

  at : (idx) -> @members[idx]

  toArray : -> @members

  flatten : (nonEmpty, members = []) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    @map (level) ->
      unless nonEmpty and level.isEmpty
        members.push level
        level.members.flatten(nonEmpty, members) unless level.isLeaf
    members

  partitionH : (nonEmpty) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    members = @flatten(nonEmpty)
    reducer = (memo, level) ->
      curpart = _.last memo
      lastlevel = _.last(curpart)
      unless lastlevel && lastlevel.depth >= level.depth
        curpart.push level
      else
        memo.push [level]
      memo

    _.reduce members, reducer, [[]]

  partitionV : (nonEmpty) ->
    nonEmpty = @isNonEmpty unless nonEmpty?
    members = @flatten(nonEmpty)
    reducer = (memo, level) ->
      group = (memo[level.depth] ||= [])
      group.push level; memo

    _.reduce members, reducer, []

  appendMeasures : (cellset) ->
    measureNames = cellset.measureNames
    prevLeaves = @leaves()
    _.each prevLeaves, (pLeaf) ->
      pLeaf.members = new MemberCollection(
        _.map measureNames, (mname) ->
          new MeasureMember(mname, pLeaf)
      )
    @invalidateCache(true)


  invalidateCache : (recursive = false) ->
    @leafCache = null
    if recursive
      @each (l) -> l.members.invalidateCache() if l.members?
