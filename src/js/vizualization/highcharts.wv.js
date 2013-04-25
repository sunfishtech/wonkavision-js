(function() {
  var HighchartsRenderer, _base;

  HighchartsRenderer = (function() {
    function HighchartsRenderer(pivotView, options) {
      this.view = pivotView;
      this.extractArgs(options);
    }

    HighchartsRenderer.prototype.renderGraph = function(data, container) {
      var chart, hc, series,
        _this = this;

      series = _.map(data, function(series) {
        return {
          name: series.name,
          data: _.map(series.data, function(point) {
            return [_this.keyToDate(point.x).unix() * 1000, parseFloat(point.y) || 0];
          })
        };
      });
      chart = container.append("div").attr("class", "wv-chart");
      return hc = new Highcharts.Chart({
        credits: {
          enabled: false
        },
        exporting: false,
        rangeSelector: {
          selected: 0
        },
        chart: _.extend(this.chartArgs, {
          renderTo: chart[0][0]
        }),
        title: false,
        yAxis: this.yAxisArgs,
        xAxis: this.xAxisArgs,
        plotOptions: {
          series: {
            animation: false
          },
          line: {
            marker: {
              enabled: false
            },
            shadow: false
          }
        },
        series: series
      });
    };

    HighchartsRenderer.prototype.extractArgs = function(args) {
      this.chartArgs = _.defaults(args.chart || {}, {
        borderWidth: 1,
        borderColor: "#CCC",
        type: "line",
        backgroundColor: "white",
        spacingBottom: 10,
        spacingTop: 10
      });
      this.xAxisArgs = _.defaults(args.xAxis || {}, {
        type: 'datetime'
      });
      this.yAxisArgs = _.defaults(args.yAxis || {}, {
        min: 0
      });
      return this.hoverArgs = args.hover || {};
    };

    HighchartsRenderer.prototype.keyToDate = function(keyStr) {
      var dateStr;

      dateStr = "" + keyStr.slice(0, 4) + "-" + keyStr.slice(4, 6) + "-" + keyStr.slice(6, 8);
      return moment(dateStr);
    };

    return HighchartsRenderer;

  })();

  (_base = this.Wonkavision).renderers || (_base.renderers = {});

  this.Wonkavision.renderers.Highcharts = HighchartsRenderer;

}).call(this);
