(function() {
  var PivotTableView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  this.Wonkavision.PivotTableView = PivotTableView = (function() {
    function PivotTableView(options) {
      _.bindAll(this, "render", "renderTable", "renderColumnHeaders", "renderTableData");
      this.extractArgs(options);
    }
    PivotTableView.prototype.colorFor = function(seriesName) {
      var _base;
      this.colorCache || (this.colorCache = {});
      return (_base = this.colorCache)[seriesName] || (_base[seriesName] = this.palette.color());
    };
    PivotTableView.prototype.render = function(args) {
      this.extractArgs(args);
      this.pivot = this.viewType === "text" ? new Wonkavision.PivotTable(this.data, args) : new Wonkavision.ChartTable(this.data, args);
      this.palette = new Rickshaw.Color.Palette({
        scheme: this.colorScheme
      });
      this.rows = this.pivot.rows.members.nonEmpty();
      this.columns = this.pivot.columns.members.nonEmpty();
      this.format = d3.format(this.cellFormat);
      return this.element.append("table").attr("class", "wv-pivot-table").call(this.renderTable);
    };
    PivotTableView.prototype.extractArgs = function(args) {
      this.cellFormat = args.cellFormat || this.cellFormat || ",.1f";
      if (args.data) {
        this.data = args.data;
      }
      if (args.element) {
        this.element = d3.selectAll(args.element);
      }
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
      this.hoverArgs = args.hover || {};
      return this.viewType = args.viewType || args.view || this.detectViewType(args);
    };
    PivotTableView.prototype.memberSpan = function(member) {
      var _ref;
      return (_ref = member.members) != null ? _ref.nonEmpty().leaves().length : void 0;
    };
    PivotTableView.prototype.renderTable = function(tableSelection) {
      this.table = tableSelection;
      if ((this.pivot.columns != null) && !this.pivot.columns.isEmpty) {
        this.table.call(this.renderColumnHeaders);
      }
      return this.table.call(this.renderTableData);
    };
    PivotTableView.prototype.renderColumnHeaders = function(tableSelection) {
      var ch, chr, colMembers, fillSpan, thead;
      colMembers = this.columns.partitionV();
      thead = tableSelection.append("thead");
      chr = thead.selectAll("tr.wv-col").data(colMembers).enter().append("tr").attr("class", "wv-col");
      fillSpan = this.pivot.rows.dimensions.length + (this.pivot.measuresAxis === "rows" ? 1 : 0);
      chr.append("th").attr("colspan", fillSpan);
      return ch = chr.selectAll("td.wv-col-header").data((function(d) {
        return d;
      }), function(d) {
        return d.key.toString();
      }).enter().append("th").text(function(level) {
        return level.caption;
      }).attr("colspan", __bind(function(d) {
        return this.memberSpan(d);
      }, this)).attr("class", "wv-col-header");
    };
    PivotTableView.prototype.renderTableData = function(tableSelection) {
      var cell, rh, rhr, rowMembers, self, tbody;
      rowMembers = this.rows.partitionH();
      tbody = tableSelection.append("tbody");
      rhr = tbody.selectAll("tr.wv-row").data(rowMembers).enter().append("tr").attr("class", "wv-row");
      rh = rhr.selectAll("th.wv-row-header").data((function(d) {
        return d;
      }), function(d) {
        return d.key.toString();
      }).enter().append("th").text(function(level) {
        return level.caption;
      }).attr("rowspan", __bind(function(d) {
        return this.memberSpan(d);
      }, this)).attr("class", "wv-row-header");
      self = this;
      cell = rhr.selectAll("td.wv-cell").data(this.pivot.cellValues).enter().append("td").attr("class", "wv-cell");
      if (this.viewType === "text") {
        return cell.text(function(d) {
          if (d != null) {
            return self.format(d);
          } else {
            return "-";
          }
        });
      } else {
        return cell.each(function(data, idx) {
          return self.renderGraph(data, idx, this);
        });
      }
    };
    PivotTableView.prototype.renderGraph = function(data, idx, cell) {
      var chart, container, graph, hoverDetail, x_axis, yAxis, y_axis;
      _.map(data, __bind(function(series) {
        series.color = this.colorFor(series.name);
        return _.map(series.data, __bind(function(point) {
          point.x = moment(point.x).unix();
          return point.y = point.y || 0;
        }, this));
      }, this));
      container = d3.select(cell).append("div").attr("class", "wv-chart-container");
      chart = container.append("div").attr("class", "wv-chart");
      yAxis = container.append("div").attr("class", "wv-y-axis");
      graph = new Rickshaw.Graph(_.extend(this.graphArgs, {
        element: chart[0][0],
        series: data
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
    PivotTableView.prototype.detectViewType = function(args) {
      if ((args.seriesSource != null) || (args.seriesFrom != null)) {
        return "chart";
      } else {
        return "text";
      }
    };
    return PivotTableView;
  })();
}).call(this);
