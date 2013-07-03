this.Wonkavision.PivotTable = class PivotTable
  constructor : (@cellset, options = {}) ->

    @axes = _.map @cellset.axes, (axis) =>
      this[axis.name] = new PivotTable.Axis(axis.name, axis.dimensions.slice(0), this)
    @measuresAxis = options.measuresAxis || options.measuresOn
    @measuresAxis ||= if @isFlat then "rows" else "columns"

    @initializeAxes()
    @seriesCells = {}
    @isFlat = if @axes.length < 2 then true else false

    for key, cell of @cellset.cells
      axis.registerCell(cell) for axis in @axes
      if @seriesDimension?
        skey = cell.key[@seriesDimension.keyIndex]
        sc = (@seriesCells[skey] ||= [])
        sc.push cell
   
    this[@measuresAxis]?.appendMeasures() if @measuresAxis?  

  initializeAxes : -> axis.initialize() for axis in @axes

  pivot : ->
    r = @rows
    @rows = @columns
    @columns = r

  createDataTable : ->
    new DataTable(this)
   
  createCell : (row, keyMembers, measureName = null) -> new TableCell(row, keyMembers, measureName)

  
#----ChartTable--------------------------------------------------
this.Wonkavision.ChartTable = class ChartTable extends PivotTable
  constructor : (cellset, options = {}) ->
    @seriesSource = options.seriesSource || options.seriesFrom || 
      if cellset.measureNames.length > 1 then "measures" else "rows"
    super(cellset, options)   

  initializeAxes : ->
    @xAxisDimension = @columns.dimensions.pop()
    @seriesDimension = if @seriesSource != "measures" && this[@seriesSource]?
      this[@seriesSource].dimensions.pop()
    if @seriesSource == "measures" then @measuresAxis = null
    super()

  createCell : (row, keyMembers, measureName) ->
    new ChartCell(row, keyMembers)

#---Data Table------------------------------
this.Wonkavision.PivotTable.DataTable = class DataTable
  constructor: (@pivot) ->
    @rowMembers = @pivot.rows?.members.nonEmpty().partitionH()
    @columnMembers = @pivot.columns?.members.nonEmpty().partitionV()
    
    @rows = []

    _.map @rowMembers, (rm) =>
      @addRow(rm)

  addRow : (rowMember) ->
    @rows.push @createRow(rowMember)

  createRow : (rowMemberOrMembers) ->
    return new TableRow(this, rowMemberOrMembers)


#---Table Row-------------------------------
this.Wonkavision.PivotTable.TableRow = class TableRow
  constructor: (@table, @rowMembers) ->
    @pivot = @table.pivot
    @cells = []
    @rowMember = if _.isArray(@rowMembers) then _.last(@rowMembers) else @rowMembersr

    if @pivot.isFlat && @pivot.measuresAxis == "rows"
      _.map @pivot.cellset.measureNames, (m) =>
        @addCell([@rowMember], m)
    else if @pivot.columns && !@pivot.columns.isEmpty
      _.map @pivot.columns.members.nonEmpty().leaves(), (colMember) =>
        @addCell( [@rowMember, colMember] )
    else
      [ @addCell( [@rowMember] ) ]

  addCell : (keyMembers, measureName) ->
    @cells.push @pivot.createCell(this, keyMembers, measureName) 


#---Table Cell------------------------------
this.Wonkavision.PivotTable.TableCell = class TableCell
  constructor: (@row, keyMembers, @measureName) ->
    @keyMembers = keyMembers.slice(0)
    @pivot = @row.pivot
    @cell = @cellFor(@keyMembers)
    @measureName ||= @findMeasureName(@keyMembers)
    @measure = @cell?[@measureName]
    @value = @measure?.value
    @formattedValue = @measure?.formattedValue
    @totalsCell = !!_.detect @keyMembers, (m) -> m.totals

  cellFor: (keyMembers) ->
    cellKey = _.flatten(_.map(_.sortBy(_.compact(keyMembers), (m) -> m.keyIndex), (m) -> m.cellKey()))
    @pivot.cellset.cells[cellKey]

  findMeasureName : (keyMembers) ->
    _.find( keyMembers, (m) -> m?.measureName? )?.measureName || @pivot.cellset.measureNames[0]


#---Chart Cell------------------------------
this.Wonkavision.PivotTable.ChartCell = class ChartCell
  constructor: (@row, @keyMembers) ->
    @pivot = @row.pivot
    if @pivot.seriesSource == "measures"
      @series = _.map @pivot.cellset.measureNames, (measureName) =>
        name : measureName
        data : @seriesFromMeasure keyMembers, measureName
    else if @pivot.seriesDimension?      
      seriesMembers = _.filter @pivot.seriesDimension.members, (m) => @pivot.seriesCells[m.key]?
      @series = _.map seriesMembers, (seriesMember) =>
        name : seriesMember.caption
        data : @seriesFromMember keyMembers, seriesMember

  seriesFromMeasure : (keyMembers, measureName) ->
    members = _.select @pivot.xAxisDimension.members, (m) -> m.key?
    _.map members, (x) =>
      xMember = Member.fromDimensionMember(x)
      pivotMember = new MeasureMember(measureName, xMember)
      key = keyMembers.concat [pivotMember]
      x : x.key
      y : new TableCell(@row, key, measureName).value

  seriesFromMember : (keyMembers, member) ->
    pivotMember = Member.fromDimensionMember(member)
    members = _.select @pivot.xAxisDimension.members, (m) -> m.key?
    _.map members, (x) =>
      xMember = Member.fromDimensionMember(x)
      key = keyMembers.concat [pivotMember, xMember]
      x : x.key
      y : new TableCell(@row, key).value



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
    unless cell.empty || @isEmpty || cell.key.length <= @startIndex
      levelKey = cell.key[@startIndex..@startIndex]
      level = @members.get(levelKey)
      level.registerCell(cell) if level

  appendMeasures : -> @members.appendMeasures(@pivotTable.cellset)

#----- Member -----------------------
this.Wonkavision.PivotTable.Member = class Member
  constructor : (key, @parent, @keyIndex, @member) ->
    @key = key
    @axis = if @parent?.axis? then @parent.axis else @parent
    @caption = @member.caption
    @depth = if @axis then @keyIndex - @axis.startIndex else 0

    @isEmpty = true
    @isLeaf = if @axis then (@keyIndex == @axis.endIndex) else 0
    @members = new MemberCollection() unless @isLeaf
    @totals = @member.totals

  cellKey : -> @key

  leaves : (nonEmpty = false) -> if @isLeaf then [this] else @members.leaves(nonEmpty)

  registerCell : (cell) ->
    @isEmpty = false
    @member.isEmpty = false
    unless @isLeaf
      childIndex = @keyIndex + 1
      childKey = cell.key[@axis.startIndex..childIndex]  
      child = @members.get(childKey)
      child.registerCell(cell) if child

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
    @member = parentMember.member
    @totals = @member.totals
      
  cellKey : -> @key[0..-2]

#----- Member Collection ----------------------------------
this.Wonkavision.PivotTable.MemberCollection = class MemberCollection
  constructor : (members = [], @isNonEmpty = false) ->
    @members = []
    @length = 0
    _.each members, (level) => @push(level)

  get : (key) ->
    _.find @members, (l) => @compareKeys(l.key, key)

  compareKeys: (left, right) ->
    left.toString() == right.toString()

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
