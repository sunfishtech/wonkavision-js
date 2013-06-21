class RickshawRenderer
  constructor : (pivotView, options) ->
    @view = pivotView
    @extractArgs(options)
    @palette = new Rickshaw.Color.Palette scheme : @colorScheme

  renderGraph : (data, container) ->
    series = _.map data, (series) =>
      name:series.name
      color:@colorFor(series.name)
      data:series.data
    
    chart = container.append("div")
      .attr("class","wv-chart")

    yAxis = container.append("div")
      .attr("class", "wv-y-axis")

    graph = new Rickshaw.Graph(
      _.extend @graphArgs, {
        element : chart[0][0]
        series : series
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

  colorFor : (seriesName) ->
    @colorCache ||= {}
    @colorCache[seriesName] ||= @palette.color()

  extractArgs: (args) ->
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

  
this.Wonkavision.renderers ||= {}
this.Wonkavision.renderers.Rickshaw = RickshawRenderer