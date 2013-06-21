this.Wonkavision.MovingCalculation = class MovingCalculation
  constructor : (options = {}) ->
    options = _.defaults options,
      windowSize:30
      calculation:"average"
      injectMissingDates:true

    @windowSize = options.windowSize
    @calculation = options.calculation
    @injectMissingDates = options.injectMissingDates
    @reset()

  add: (date, value) ->
    date = moment(date)
    @currentDate ||= date
    @advanceTo date
    @addSample value
    this

  reset: ->
    @samples=  []
    @values = []
    @currentDate = null
    this

  advanceTo: (date) ->
    date = moment(date)
    while @currentDate? && @currentDate < date
      @skipDay()

  skipDay: ->
    if @injectMissingDates then @addSample(0) else @advanceDay()

  advanceDay: ->
    @currentDate.add('days',1)

  addSample: (value) ->
    @samples.unshift value
    @samples.pop() if @samples.length > @windowSize
    @values.push [@currentDate.clone().unix()*1000, @currentValue()]
    @advanceDay()

  currentValue: ->
    reducer = (memo, cur) -> memo + cur
    sum = _.reduce @samples, reducer, 0
    if @calculation == "average" then sum/@samples.length else sum



