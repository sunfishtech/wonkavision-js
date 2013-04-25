(function() {
  var HighchartsRenderer, _base;

  HighchartsRenderer = (function() {
    function HighchartsRenderer(pivotView, options) {
      this.view = pivotView;
      this.extractArgs(options);
    }

    HighchartsRenderer.prototype.renderGraph = function(data, container) {
      var chart, chartArgs, hc, series,
        _this = this;

      series = _.map(data, function(series) {
        return {
          name: series.name,
          data: _.map(series.data, function(point) {
            return [_this.keyToDate(point.x), parseFloat(point.y) || 0];
          })
        };
      });
      chart = container.append("div").attr("class", "wv-chart");
      chartArgs = _.extend(this.chartArgs, {
        series: series,
        chart: _.extend(this.chartArgs.chart, {
          renderTo: chart[0][0]
        })
      });
      return hc = new Highcharts.Chart(chartArgs);
    };

    HighchartsRenderer.prototype.extractArgs = function(args) {
      this.chartArgs = args.highchart || {};
      this.chartArgs.chart = _.defaults(this.chartArgs.chart || {}, {
        borderWidth: 1,
        borderColor: "#CCC",
        type: "line",
        backgroundColor: "white",
        spacingBottom: 10,
        spacingTop: 10
      });
      return this.chartArgs.xAxis = _.defaults(this.chartArgs.xAxis || {}, {
        type: 'datetime'
      });
    };

    HighchartsRenderer.prototype.keyToDate = function(keyStr) {
      var dateStr;

      dateStr = "" + keyStr.slice(0, 4) + "-" + keyStr.slice(4, 6) + "-" + keyStr.slice(6, 8);
      return moment(dateStr).unix() * 1000;
    };

    return HighchartsRenderer;

  })();

  (_base = this.Wonkavision).renderers || (_base.renderers = {});

  this.Wonkavision.renderers.Highcharts = HighchartsRenderer;

}).call(this);
