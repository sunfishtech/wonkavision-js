this.Wonkavision.MovingCalculation = class MovingCalculation
  constructor : (options = {}) ->
    options = _.defaults options,
      windowSize:30
      windowType:"days"
      calculation:"average"
      transformation: (val) -> val
      injectMissingDates:true
      treatNullsAsZero:true

    @windowSize = options.windowSize
    @windowType = options.windowType
    @calculation = options.calculation
    @injectMissingDates = options.injectMissingDates
    @transformation = options.transformation
    @treatNullsAsZero = options.treatNullsAsZero
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
      @skip()

  skip: ->
    if @injectMissingDates then @addSample(null) else @advance()

  advance: ->
    @currentDate.add(@windowType,1)

  addSample: (value) ->
    @samples.unshift value
    @samples.pop() if @samples.length > @windowSize
    @values.push [@currentDate.clone().unix()*1000, @currentValue()]
    @advance()

  currentValue: ->
    reducer = (memo, cur) -> memo + (cur || 0)
    sum = _.reduce @samples, reducer, 0
    num = if @treatNullsAsZero then @samples.length else _.compact(@samples.slice(0)).length
    val = if @calculation == "average" then sum/num else sum
    @transformation?(val) || val



