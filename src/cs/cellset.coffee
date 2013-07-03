Cell = this.Wonkavision.Cell
Axis = this.Wonkavision.Axis
Filter = this.Wonkavision.Filter

this.Wonkavision.Cellset = class Cellset
  constructor : (data = {}, @query=null) ->
    @cube = data.cube || null
    @includeTotals = !!@query?.includeTotals
    
    slicer = data.slicer || []
    filters = data.filters || []

    @slicer = (Filter.parse f for f in slicer)
    @filters = (Filter.parse f for f in filters)
    @measureNames = data.measure_names || []
    @levelCount = 0
    @axes = for i in [0...data.axes.length]
      axis = data.axes[i]
      name = Wonkavision.AXIS_NAMES[i]
      a = new Axis(name, this, axis, @levelCount)
      @levelCount = a.endIndex + 1
      a

    @cells = {}
    @totals = new Cell( this, data.totals )
    @cells[@totals.key] = @totals

    for cell in (data.cells || [])
      c = new Cell(this, cell)
      @cells[c.key] = c

    for axis, index in Wonkavision.AXIS_NAMES
      this[axis] = @axes[index]

  cell : () ->
    coords = if coord? then coord.toString() else coord for coord in arguments
    @cells[coords] || new Cell(this)

 

    





     