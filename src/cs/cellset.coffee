Cell = this.Wonkavision.Cell
Axis = this.Wonkavision.Axis
Filter = this.Wonkavision.Filter

this.Wonkavision.Cellset = class Cellset
  constructor : (data = {}, @query=null) ->
    @aggregation = data.aggregation || null
    @slicer = (Filter.parse f for f in data.slicer) || []
    @filters = (Filter.parse f for f in data.filters)
    @totals = new Cell( this, data.totals )
    @measure_names = data.measure_names || []
    startIndex = 0
    @axes = for axis in (data.axes || [])
      a = new Axis(this, axis, startIndex)
      startIndex = a.endIndex + 1; a

      
    @cells = {}
    for cell in (data.cells || [])
      @cells[cell.key] = new Cell(this, cell)
    
    for axis, index in ["columns","rows","pages","chapters","sections"]
      this[axis] = @axes[index]
  
  cell : () ->
    coords = if coord? then coord.toString() else coord for coord in arguments
    @cells[coords] || new Cell(this)


     