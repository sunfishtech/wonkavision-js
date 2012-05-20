Cell = this.Wonkavision.Cell
Axis = this.Wonkavision.Axis
Filter = this.Wonkavision.Filter

this.Wonkavision.Cellset = class Cellset
  constructor : (data = {}, @query=null) ->
    @aggregation = data.aggregation || null
    
    slicer = data.slicer || []
    filters = data.filters || []

    @slicer = (Filter.parse f for f in slicer)
    @filters = (Filter.parse f for f in filters)
    @totals = new Cell( this, data.totals )
    @measureNames = data.measure_names || []
    startIndex = 0
    @axes = for i in [0...data.axes.length]
      axis = data.axes[i]
      name = Wonkavision.AXIS_NAMES[i]
      a = new Axis(name, this, axis, startIndex)
      startIndex = a.endIndex + 1; a

      
    @cells = {}
    for cell in (data.cells || [])
      @cells[cell.key] = new Cell(this, cell)

    for axis, index in Wonkavision.AXIS_NAMES
      this[axis] = @axes[index]

  cell : () ->
    coords = if coord? then coord.toString() else coord for coord in arguments
    @cells[coords] || new Cell(this)


     