MovingCalculation = this.Wonkavision.MovingCalculation
Utilities = this.Wonkavision.Utilities

this.Wonkavision.PivotTableView = class PivotTableView
  constructor : (options) ->
    _.bindAll this, "render", "renderTable", "renderColumnHeaders", "renderTableData"
    @extractArgs(options)
  
  render : (args) ->
    @extractArgs(args)
    
    if @viewType == "text"
      @pivot = new Wonkavision.PivotTable(@data, args)
    else
      @pivot = new Wonkavision.ChartTable(@data, args)

    #for flat queries, default should display measures on colums and dimensions on rows
    @pivot.pivot() if @pivot.isFlat && @viewType == "text"

    @dataTable = @pivot.createDataTable()

    unless @suppressMeasureHeaders?
      @suppressMeasureHeaders = @pivot.cellset.measureNames.length < 2
    #@format = d3.format(@cellFormat)

    @element.append("table").attr("class","wv-pivot-table").call(@renderTable)

  extractArgs : (args) ->
    #@cellFormat = args.cellFormat || @cellFormat || ",.1f"
    @data = args.data if args.data
    @element = d3.selectAll(args.element) if args.element
    @viewType = args.viewType || args.view || @detectViewType(args)
    @renderer = if @viewType == "text" then args.cellRenderer else @createRenderer(args) 
    @formatLabel = args.formatLabel || (l) -> l
    @formatData = args.formatData || ((d) -> if d.formattedValue? then d.formattedValue else "-")
    @smooth = args.smooth
    if @smooth
      @smoothingMethod = args.smoothingMethod
      @smoothingWindow = args.smoothingWindow || 30
    @suppressMeasureHeaders = args.suppressMeasureHeaders

  createRenderer : (args) ->
    rendererClass = args.renderer || Wonkavision.renderers["default"] || Wonkavision.renderers.Rickshaw
    new rendererClass(this, args)
  
  memberSpan : (member) -> member.members?.nonEmpty().leaves().length
    
  renderTable : (tableSelection) ->
    @dataRows = []
    @table = tableSelection
    #if @pivot.columns? && !@pivot.columns.isEmpty
    @table.call(@renderColumnHeaders)
    @table.call(@renderTableData)
  
  renderColumnHeaders : (tableSelection) ->
    if @pivot.isFlat && @pivot.measuresAxis == "rows"
      colnames = _.map @pivot.axes[0].dimensions, (dim) -> dim.name
      colnames = colnames.concat @pivot.cellset.measureNames
      thead = tableSelection.append("thead")
      hrow = thead.append("tr")
        .classed("wv-col",true)

      hrow.selectAll("th.wv-col-header")
        .data(colnames)
        .enter().append("th")
        .text((name) => @formatLabel(name))
    else
      colMembers = @dataTable.columnMembers
      thead = tableSelection.append("thead")

      chr = thead.selectAll("tr.wv-col")
        .data(@filterColHeaders(colMembers))
        .enter()
        .append("tr").attr("class", "wv-col")

      fillSpan = @pivot.rows.dimensions.length +
        if @pivot.measuresAxis == "rows" && !@suppressMeasureHeaders then 1 else 0
      chr.append("th").attr("colspan", fillSpan)
      ch = chr.selectAll("th.wv-col-header")
        .data(((d) -> d), (d) -> d.key.toString())
        .enter().append("th")
        .text((level) => @formatLabel(level.caption))
        .attr("colspan", (d) => @memberSpan(d))
        .attr("class", "wv-col-header")
        .classed("wv-totals", (d) -> d.totals)

  renderTableData : (tableSelection) ->
    tbody = tableSelection.append("tbody")
    rhr = tbody.selectAll("tr.wv-row")
      .data(@dataTable.rows)
      .enter().append("tr")
        .classed("wv-row",true)
        .classed("wv-totals", (tr) -> tr.totalsRow)

    rh = rhr.selectAll("th.wv-row-header")
      .data(((row) => @filterRowHeaders(row.rowMembers)), (member) -> member.key.toString())
      .enter().append("th")
      .text((level) => @formatLabel(level.caption))
      .attr("rowspan", (d) => @memberSpan(d))
      .attr("class","wv-row-header")
      .classed("wv-totals", (d) -> d.totals)

    self = this
    cell = rhr.selectAll("td.wv-cell")
      .data((row) => row.cells)
      .enter().append("td")
      .classed("wv-cell", true)
      .classed("wv-totals", (tc) -> tc.totalsCell)


    if @viewType == "text"
      cell.each((data,idx) -> self.renderCell(data, idx, this))
    else
      cell.each((data, idx) -> self.renderGraph(data, idx, this))

  filterRowHeaders: (levels) ->
    return levels unless levels.length > 0
    data = levels
    if _.last(data).isMeasure? and @suppressMeasureHeaders
      data = data[0..-2]
    data

  filterColHeaders: (headerRows) ->
    if @suppressMeasureHeaders && @pivot.measuresAxis == "columns"
      headerRows[0..-2]
    else
      headerRows

  renderCell : (tableCell, idx, cell) ->
    @renderer ||= (tableCell, idx, cell) =>
      d3.select(cell).
        attr("data-wv-filters",tableCell.cell?.filters.join(",")).
        text((tc) => @formatData(tc))
    @renderer(tableCell, idx, cell)

  renderGraph : (chartCell, idx, cell) ->
    data = @prepareSeries(chartCell.series)
    container = d3.select(cell)
      .append("div")
      .attr("class","wv-chart-container")

    @renderer.renderGraph(data, container)

  detectViewType : (args) ->
    if args.seriesSource? || args.seriesFrom? then "chart" else "text"

  prepareSeries: (data) ->
    data = _.map data, (series) =>
      name: @formatLabel(series.name)
      data: @prepareSeriesData(series.data)

  prepareSeriesData: (data) ->
    if @smoothingMethod?
      calc = new MovingCalculation
        windowSize:@smoothingWindow
        calculation:@smoothingMethod
      _.each data, (point) =>
        calc.add(@keyToDate(point.x), parseFloat(point.y||0))
      _.map calc.values[@smoothingWindow..], (point) ->
        x: point[0]
        y: point[1]
    else
      _.map data, (point) =>
          x: @keyToDate point.x
          y: parseFloat(point.y) || 0


  keyToDate : (keyStr) -> Utilities.keyToDate(keyStr, false).unix()*1000
    


  