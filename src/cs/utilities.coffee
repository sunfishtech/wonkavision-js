Wonkavision = this.Wonkavision
Wonkavision.Utilities = 

  keyToDate : (keyStr, unwrap = true) ->
    #dates are stored in the DB as 20080501
    #months are 2008-05
    #years are 2008
    #this function should convert each to  a date
    keyStr = keyStr.toString().replace("-","")
    dateStr = "#{keyStr[0..3]}-#{keyStr[4..5] || '01'}-#{keyStr[6..7] || '01'}"
    date = moment(dateStr)
    if unwrap then date._d else date

  dateToKey : (date = moment()) ->
    parseInt(moment(date).format("YYYYMMDD"))

  rangeToKeys : (dateRange) ->
    _.map dateRange, @dateToKey

  beginningOfMonth:(date = new Date()) ->
    moment(date).startOf('month')._d

  endOfMonth:(date = new Date()) ->
    moment(date).endOf('month')._d

  quarter:(date = new Date()) ->
    parseInt(moment(date).month() / 3) + 1

  beginningOfQuarter:(date = new Date()) ->
    date = moment(date)
    offset = date.month() % 3
    date.add("months", offset * -1).date(1)._d

  beginningOfYear:(date = new Date()) ->
    moment(date).dayOfYear(1)._d

  dateRange: (startDate, endDate, toKeys = false) ->
    range = [startDate, endDate]
    if toKeys then @rangeToKeys range else range

  timeWindow: (startDate, period, windowSize, toKeys = false) ->
    start = moment(startDate).add(period, windowSize * -1)._d
    end = moment(startDate)
    @dateRange(start, end, toKeys)

  mtd: (startDate = new Date(), toKeys = false) ->
    start = @beginningOfMonth(startDate)
    end = startDate
    @dateRange(start, end, toKeys)

  ytd: (startDate = new Date(), toKeys = false) ->
    start = @beginningOfYear(startDate)
    end = startDate
    @dateRange(start, end, toKeys)

  qtd: (startDate = new Date(), toKeys = false) ->
    start = @beginningOfQuarter(startDate)
    end = startDate
    @dateRange(start, end, toKeys)

  lastMonth: (startDate = new Date(), toKeys = false) ->
    start = moment(start).add("months",-1)
    @dateRange(@beginningOfMonth(start), @endOfMonth(start), toKeys)

  smoothSeries: (points, opts = {}) ->
    _.defaults opts,
      windowSize: 30
      windowType: "days"
      calculation: "average"
      transformation: (val) -> val

    calc = new Wonkavision.MovingCalculation(opts)
    _.each points, (point) =>
      calc.add(point.x, point.y)
    _.map calc.values[opts.windowSize..],(point) ->
      x:point[0]
      y:point[1]

  sortRows: (cellset, options={}) ->
    measureName = options["measureName"] || cellset.measureNames[0]
    columnKey = options["columnKey"] || null
    dir = options["direction"] || 1
    cellset.rows.dimensions[0].sortBy (m) ->
      (cellset.cell(columnKey,m.key)?.measures[measureName]?.value || 0) * dir




 

    





     