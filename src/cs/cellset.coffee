Cell = this.Wonkavision.Cell
Axis = this.Wonkavision.Axis
MemberFilter = this.Wonkavision.MemberFilter

this.Wonkavision.Cellset = class Cellset
  constructor : (data = {}) ->
    @aggregation = data.aggregation || null
    @slicer = data.slicer || []
    @filters = data.filters
    @totals = new Cell( this, data.totals )
    @measure_names = data.measure_names || []
    start_index = 0
    @axes = for axis in (data.axes || [])
      a = new Axis(self, axis, start_index)
      start_index = a.end_index + 1; a

      
    @cells = {}
    for cell in (data.cells || [])
      @cells[cell.key] = new Cell(self, cell)
    
    for axis, index in ["columns","rows","pages","chapters","sections"]
      this[axis] = @axes[index]
  
  cell : (coordinates) ->
    coords = if coord? then coord.toString() else coord for coord in coordinates
    @cells[coordinates] || new Cell(this)


     