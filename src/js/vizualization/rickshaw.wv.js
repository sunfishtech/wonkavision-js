(function() {
  var RickshawRenderer, _base;

  RickshawRenderer = (function() {
    function RickshawRenderer(options) {
      this.extractArgs(options);
      this.palette = new Rickshaw.Color.Palette({
        scheme: this.colorScheme
      });
    }

    RickshawRenderer.prototype.renderGraph = function(data, container) {
      var chart, graph, hoverDetail, series, x_axis, yAxis, y_axis,
        _this = this;

      series = _.map(data, function(series) {
        return {
          name: series.name,
          color: _this.colorFor(series.name),
          data: series.data
        };
      });
      chart = container.append("div").attr("class", "wv-chart");
      yAxis = container.append("div").attr("class", "wv-y-axis");
      graph = new Rickshaw.Graph(_.extend(this.graphArgs, {
        element: chart[0][0],
        series: series
      }));
      x_axis = new Rickshaw.Graph.Axis.Time(_.extend(this.xAxisArgs, {
        graph: graph
      }));
      y_axis = new Rickshaw.Graph.Axis.Y(_.extend(this.yAxisArgs, {
        graph: graph,
        element: yAxis[0][0]
      }));
      hoverDetail = new Rickshaw.Graph.HoverDetail(_.extend(this.hoverArgs, {
        graph: graph
      }));
      return graph.render();
    };

    RickshawRenderer.prototype.colorFor = function(seriesName) {
      var _base;

      this.colorCache || (this.colorCache = {});
      return (_base = this.colorCache)[seriesName] || (_base[seriesName] = this.palette.color());
    };

    RickshawRenderer.prototype.extractArgs = function(args) {
      this.colorScheme = args.palette || args.colorScheme || this.colorScheme || "munin";
      this.graphArgs = _.defaults(args.graph || {}, {
        width: 300,
        height: 300,
        renderer: 'line'
      });
      this.xAxisArgs = args.xAxis || {};
      this.yAxisArgs = _.defaults(args.yAxis || {}, {
        orientation: 'left',
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT
      });
      return this.hoverArgs = args.hover || {};
    };

    return RickshawRenderer;

  })();

  (_base = this.Wonkavision).renderers || (_base.renderers = {});

  this.Wonkavision.renderers.Rickshaw = RickshawRenderer;

}).call(this);
