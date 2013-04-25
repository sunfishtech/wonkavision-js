(function() {
  var PivotTableView;

  this.Wonkavision.PivotTableView = PivotTableView = (function() {
    function PivotTableView(options) {
      _.bindAll(this, "render", "renderTable", "renderColumnHeaders", "renderTableData");
      this.extractArgs(options);
    }

    PivotTableView.prototype.render = function(args) {
      this.extractArgs(args);
      if (this.viewType === "text") {
        this.pivot = new Wonkavision.PivotTable(this.data, args);
      } else {
        this.pivot = new Wonkavision.ChartTable(this.data, args);
        this.renderer = new Wonkavision.renderers.Highcharts(this, args);
      }
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
      var ch, chr, colMembers, fillSpan, thead,
        _this = this;

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
      }).attr("colspan", function(d) {
        return _this.memberSpan(d);
      }).attr("class", "wv-col-header");
    };

    PivotTableView.prototype.renderTableData = function(tableSelection) {
      var cell, rh, rhr, rowMembers, self, tbody,
        _this = this;

      rowMembers = this.rows.partitionH();
      tbody = tableSelection.append("tbody");
      rhr = tbody.selectAll("tr.wv-row").data(rowMembers).enter().append("tr").attr("class", "wv-row");
      rh = rhr.selectAll("th.wv-row-header").data((function(d) {
        return d;
      }), function(d) {
        return d.key.toString();
      }).enter().append("th").text(function(level) {
        return level.caption;
      }).attr("rowspan", function(d) {
        return _this.memberSpan(d);
      }).attr("class", "wv-row-header");
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
      var container;

      container = d3.select(cell).append("div").attr("class", "wv-chart-container");
      return this.renderer.renderGraph(data, container);
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
