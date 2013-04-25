class HighchartsRenderer
  constructor : (pivotView, options) ->
    @view = pivotView
    @extractArgs(options)

  renderGraph : (data, container) ->
    series = _.map data, (series) =>
      name:series.name
      data: _.map series.data, (point) =>
        [@keyToDate(point.x).unix()*1000,parseFloat(point.y) || 0]
    
    chart = container.append("div")
      .attr("class","wv-chart")
  
    hc = new Highcharts.Chart(
      credits:
        enabled:false
      exporting:false
      rangeSelector:
          selected:0
      chart: _.extend @chartArgs, 
        renderTo:chart[0][0]
      title:false
      yAxis: @yAxisArgs
      xAxis: @xAxisArgs
      plotOptions:
        series:
          animation:false
        line:
          marker:
            enabled:false
          shadow:false
      series: series
    )      

  extractArgs: (args) ->
    @chartArgs = _.defaults args.chart || {},
      borderWidth:1
      borderColor:"#CCC"
      type:"line"
      backgroundColor:"white"
      spacingBottom:10
      spacingTop:10

    @xAxisArgs = _.defaults args.xAxis || {},
      type:'datetime'

    @yAxisArgs = _.defaults args.yAxis || {},
      min:0

    @hoverArgs = args.hover || {}

  keyToDate : (keyStr) ->
    dateStr = "#{keyStr[0..3]}-#{keyStr[4..5]}-#{keyStr[6..7]}"
    moment(dateStr)

this.Wonkavision.renderers ||= {}
this.Wonkavision.renderers.Highcharts = HighchartsRenderer