this.Wonkavision.PivotTableView = class PivotTableView
  constructor : (options) ->
    _.bindAll this, "render", "renderTable", "renderColumnHeaders", "renderTableData"
    @extractArgs(options)

  colorFor : (seriesName) ->
    @colorCache ||= {}
    @colorCache[seriesName] ||= @palette.color()

  render : (args) ->
    @extractArgs(args)
    
    @pivot = if @viewType == "text"
      new Wonkavision.PivotTable(@data, args)
    else
      new Wonkavision.ChartTable(@data, args)

    @palette = new Rickshaw.Color.Palette scheme : @colorScheme
    @rows = @pivot.rows.members.nonEmpty()
    @columns = @pivot.columns.members.nonEmpty()
    @format = d3.format(@cellFormat)

    @element.append("table").attr("class","wv-pivot-table").call(@renderTable)

  extractArgs : (args) ->
    @cellFormat = args.cellFormat || @cellFormat || ",.1f"
    @data = args.data if args.data
    @element = d3.selectAll(args.element) if args.element
    @colorScheme = args.palette || args.colorScheme || @colorScheme || "munin"
    @graphArgs = _.defaults args.graph || {},
      width:300
      height:300
      renderer: 'line'

    @xAxisArgs = args.xAxis || {}

    @yAxisArgs = _.defaults args.yAxis || {},
      orientation : 'left'
      tickFormat : Rickshaw.Fixtures.Number.formatKMBT

    @hoverArgs = args.hover || {}

    @viewType = args.viewType || args.view || @detectViewType(args)
  
  memberSpan : (member) -> member.members?.nonEmpty().leaves().length
    
  renderTable : (tableSelection) ->
    @table = tableSelection
    if @pivot.columns? && !@pivot.columns.isEmpty
      @table.call(@renderColumnHeaders)
    @table.call(@renderTableData)
  
  renderColumnHeaders : (tableSelection) ->
    colMembers = @columns.partitionV()
    thead = tableSelection.append("thead")
    chr = thead.selectAll("tr.wv-col")
      .data(colMembers)
      .enter()
      .append("tr").attr("class", "wv-col")

    fillSpan = @pivot.rows.dimensions.length + if @pivot.measuresAxis == "rows" then 1 else 0
    chr.append("th").attr("colspan", fillSpan)
    ch = chr.selectAll("td.wv-col-header")
      .data(((d) -> d), (d) -> d.key.toString())
      .enter().append("th")
      .text((level) -> level.caption)
      .attr("colspan", (d) => @memberSpan(d))
      .attr("class", "wv-col-header")

  renderTableData : (tableSelection) ->
    rowMembers = @rows.partitionH()
    tbody = tableSelection.append("tbody")
    rhr = tbody.selectAll("tr.wv-row")
      .data(rowMembers)
      .enter().append("tr").attr("class", "wv-row")

    rh = rhr.selectAll("th.wv-row-header")
      .data(((d) -> d), (d) -> d.key.toString())
      .enter().append("th")
      .text((level) -> level.caption)
      .attr("rowspan", (d) => @memberSpan(d))
      .attr("class","wv-row-header")

    self = this
    cell = rhr.selectAll("td.wv-cell")
      .data(@pivot.cellValues)
      .enter().append("td")
      .attr("class","wv-cell")

    if @viewType == "text"
      cell.text((d) -> if d? then self.format(d) else "-")
    else
      cell.each((data, idx) -> self.renderGraph(data, idx, this))

  renderGraph : (data, idx, cell) ->
    _.map data, (series) =>
      series.color = @colorFor(series.name)
      _.map series.data, (point) =>
        point.x = @keyToDate(point.x).unix()
        point.y = parseFloat(point.y) || 0
        console.debug(point)

    container = d3.select(cell)
      .append("div")
      .attr("class","wv-chart-container")

    chart = container.append("div")
      .attr("class","wv-chart")

    yAxis = container.append("div")
      .attr("class", "wv-y-axis")

    graph = new Rickshaw.Graph(
      _.extend @graphArgs, {
        element : chart[0][0]
        series : data
      }
    )      

    x_axis = new Rickshaw.Graph.Axis.Time(
      _.extend @xAxisArgs, graph : graph
    ) 

    y_axis = new Rickshaw.Graph.Axis.Y(
      _.extend @yAxisArgs, {
        graph : graph
        element : yAxis[0][0]
      }
    )

    hoverDetail = new Rickshaw.Graph.HoverDetail(
      _.extend @hoverArgs, graph : graph
    )

    graph.render()

  detectViewType : (args) ->
    if args.seriesSource? || args.seriesFrom? then "chart" else "text"

  keyToDate : (keyStr) ->
    dateStr = "#{keyStr[0..3]}-#{keyStr[4..5]}-#{keyStr[6..7]}"
    moment(dateStr)