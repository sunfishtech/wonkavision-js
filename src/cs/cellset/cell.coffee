Measure = this.Wonkavision.Measure

this.Wonkavision.Cell = class Cell
  constructor : (@cellset, data) ->
    @measures = {}
    @empty = true
    if data
      this.addMeasure(measure) for measure in data.measures
      @key = data.key  
  
  addMeasure : (measureData) ->
    name = measureData.name
    this[name] = new Measure(measureData)
    @measures[name] = this[name]
    @empty = false unless this[name].empty
  