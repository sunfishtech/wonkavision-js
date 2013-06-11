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
    @pivot.pivot() if @pivot.isFlat

    @rows = @pivot.rows?.members.nonEmpty() || []
    @columns = @pivot.columns?.members.nonEmpty() || []
    #@format = d3.format(@cellFormat)

    @element.append("table").attr("class","wv-pivot-table").call(@renderTable)

  extractArgs : (args) ->
    #@cellFormat = args.cellFormat || @cellFormat || ",.1f"
    @data = args.data if args.data
    @element = d3.selectAll(args.element) if args.element
    @viewType = args.viewType || args.view || @detectViewType(args)
    @renderer = @createRenderer(args) if @viewType != "text"
    @formatLabel = args.formatLabel || (l) -> l
    @formatData = args.formatData || ((d) -> if d? then d else "-")

  createRenderer : (args) ->
    rendererClass = args.renderer || Wonkavision.renderers["default"] || Wonkavision.renderers.Rickshaw
    new rendererClass(this, args)
  
  memberSpan : (member) -> member.members?.nonEmpty().leaves().length
    
  renderTable : (tableSelection) ->
    @table = tableSelection
    #if @pivot.columns? && !@pivot.columns.isEmpty
    @table.call(@renderColumnHeaders)
    @table.call(@renderTableData)
  
  renderColumnHeaders : (tableSelection) ->
    if @pivot.isFlat && @pivot.measuresAxis == "rows"
      colnames = _.map @pivot.axes[0].dimensions, (dim) -> dim.name
      colnames = colnames.concat @pivot.cellset.measureNames
      thead = tableSelection.append("thead")
      hrow = thead.append("tr").attr("class","wv-col")
      hrow.selectAll("th.wv-col-header")
        .data(colnames)
        .enter().append("th")
        .text((name) => @formatLabel(name))
    else
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
        .text((level) => @formatLabel(level.caption))
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
      .text((level) => @formatLabel(level.caption))
      .attr("rowspan", (d) => @memberSpan(d))
      .attr("class","wv-row-header")

    self = this
    cell = rhr.selectAll("td.wv-cell")
      .data(@pivot.cellValues)
      .enter().append("td")
      .attr("class","wv-cell")

    if @viewType == "text"
      cell.text((d) => @formatData(d))
    else
      cell.each((data, idx) -> self.renderGraph(data, idx, this))

  renderGraph : (data, idx, cell) ->
        
    container = d3.select(cell)
      .append("div")
      .attr("class","wv-chart-container")

    @renderer.renderGraph(data, container)

  detectViewType : (args) ->
    if args.seriesSource? || args.seriesFrom? then "chart" else "text"

  