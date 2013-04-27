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
      var _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;

      this.chartArgs = args.highchart || {};
      this.chartArgs.chart = _.defaults(this.chartArgs.chart || {}, {
        borderColor: "#CCC",
        type: "line",
        backgroundColor: "white",
        spacingBottom: 10,
        spacingTop: 10
      });
      this.chartArgs.tooltip = _.defaults(this.chartArgs.tooltip || {}, {
        shared: true
      });
      this.chartArgs.plotOptions = _.extend(this.chartArgs.plotOptions || {}, {
        series: _.defaults(((_ref = this.chartArgs.plotOptions) != null ? _ref.series : void 0) || {}, {
          animation: false
        }),
        line: _.defaults(((_ref1 = this.chartArgs.plotOptions) != null ? _ref1.line : void 0) || {}, {
          marker: _.defaults(((_ref2 = this.chartArgs.plotOptions) != null ? (_ref3 = _ref2.line) != null ? _ref3.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        }),
        column: _.defaults(((_ref4 = this.chartArgs.plotOptions) != null ? _ref4.column : void 0) || {}, {
          shadow: false
        }),
        bar: _.defaults(((_ref5 = this.chartArgs.plotOptions) != null ? _ref5.bar : void 0) || {}, {
          shadow: false
        }),
        spline: _.defaults(((_ref6 = this.chartArgs.plotOptions) != null ? _ref6.spline : void 0) || {}, {
          marker: _.defaults(((_ref7 = this.chartArgs.plotOptions) != null ? (_ref8 = _ref7.spline) != null ? _ref8.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        }),
        area: _.defaults(((_ref9 = this.chartArgs.plotOptions) != null ? _ref9.area : void 0) || {}, {
          marker: _.defaults(((_ref10 = this.chartArgs.plotOptions) != null ? (_ref11 = _ref10.area) != null ? _ref11.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        }),
        areaspline: _.defaults(((_ref12 = this.chartArgs.plotOptions) != null ? _ref12.areaspline : void 0) || {}, {
          marker: _.defaults(((_ref13 = this.chartArgs.plotOptions) != null ? (_ref14 = _ref13.areaspline) != null ? _ref14.marker : void 0 : void 0) || {}, {
            enabled: false
          }),
          shadow: false
        })
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
