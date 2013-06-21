class HighchartsRenderer
  constructor : (pivotView, options) ->
    @view = pivotView
    @extractArgs(options)

  renderGraph : (data, container) ->
    series = data
    
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
      borderColor:"#CCC"
      type:"line"
      backgroundColor:"white"
      spacingBottom:10
      spacingTop:10

    @chartArgs.tooltip = _.defaults @chartArgs.tooltip || {},
      shared:true

    @chartArgs.plotOptions = _.extend @chartArgs.plotOptions || {},
      series: _.defaults @chartArgs.plotOptions?.series || {},
        animation:false
      line: _.defaults @chartArgs.plotOptions?.line || {},
        marker: _.defaults @chartArgs.plotOptions?.line?.marker || {},
          enabled:false
        shadow:false
      column: _.defaults @chartArgs.plotOptions?.column || {},
        shadow:false
      bar: _.defaults @chartArgs.plotOptions?.bar || {},
        shadow:false
      spline: _.defaults @chartArgs.plotOptions?.spline || {},
        marker: _.defaults @chartArgs.plotOptions?.spline?.marker || {},
          enabled:false
        shadow:false
      area: _.defaults @chartArgs.plotOptions?.area || {},
        marker: _.defaults @chartArgs.plotOptions?.area?.marker || {},
          enabled:false
        shadow:false
      areaspline: _.defaults @chartArgs.plotOptions?.areaspline || {},
        marker: _.defaults @chartArgs.plotOptions?.areaspline?.marker || {},
          enabled:false
        shadow:false

    @chartArgs.xAxis = _.defaults @chartArgs.xAxis || {},
      type:'datetime'

  keyToDate : (keyStr) ->
    dateStr = "#{keyStr[0..3]}-#{keyStr[4..5]}-#{keyStr[6..7]}"
    moment(dateStr).unix()*1000

this.Wonkavision.renderers ||= {}
this.Wonkavision.renderers.Highcharts = HighchartsRenderer