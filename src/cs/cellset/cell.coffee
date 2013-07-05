Measure = this.Wonkavision.Measure
Filter = this.Wonkavision.Filter

this.Wonkavision.Cell = class Cell
  constructor : (@cellset, data) ->
    @measures = {}
    @dimensions = []
    @filters=  []
    @empty = true
    if data
      this.addMeasure(measure) for measure in data.measures
      @key = data.key.slice(0)
      while @key.length < @cellset.levelCount
        @key.push(null)
      @dimensions = data.dimensions || []
      @filters = _.map @dimensions, (dim, idx) =>
        new Filter dim, value:_.compact(@key)[idx]
  
  addMeasure : (measureData) ->
    name = measureData.name
    this[name] = new Measure(measureData)
    @measures[name] = this[name]
    @empty = false unless this[name].empty


   


  