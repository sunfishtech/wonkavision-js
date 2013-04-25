class HighchartsRenderer
  constructor : (pivotView, options) ->
    @view = pivotView
    @extractArgs(options)

  renderGraph : (data, container) ->
    series = _.map data, (series) =>
      name:series.name
      data: _.map series.data, (point) =>
        [@keyToDate(point.x),parseFloat(point.y) || 0]
    
    chart = container.append("div")
      .attr("class","wv-chart")
    
    chartArgs = _.extend @chartArgs, 
      series: series
      chart: _.extend @chartArgs.chart,
        renderTo: chart[0][0]
    hc = new Highcharts.Chart(chartArgs)      

  extractArgs: (args) ->
    @chartArgs = args.highchart || {}
    @chartArgs.chart = _.defaults @chartArgs.chart || {}, 
      borderWidth:1
      borderColor:"#CCC"
      type:"line"
      backgroundColor:"white"
      spacingBottom:10
      spacingTop:10

    @chartArgs.xAxis = _.defaults @chartArgs.xAxis || {},
      type:'datetime'

  keyToDate : (keyStr) ->
    dateStr = "#{keyStr[0..3]}-#{keyStr[4..5]}-#{keyStr[6..7]}"
    moment(dateStr).unix()*1000

this.Wonkavision.renderers ||= {}
this.Wonkavision.renderers.Highcharts = HighchartsRenderer