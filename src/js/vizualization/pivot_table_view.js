(function() {
  var PivotTableView;

  this.Wonkavision.PivotTableView = PivotTableView = (function() {
    function PivotTableView(options) {
      _.bindAll(this, "render", "renderTable", "renderColumnHeaders", "renderTableData");
      this.extractArgs(options);
    }

    PivotTableView.prototype.render = function(args) {
      var _ref, _ref1;

      this.extractArgs(args);
      if (this.viewType === "text") {
        this.pivot = new Wonkavision.PivotTable(this.data, args);
      } else {
        this.pivot = new Wonkavision.ChartTable(this.data, args);
      }
      if (this.pivot.isFlat) {
        this.pivot.pivot();
      }
      this.rows = ((_ref = this.pivot.rows) != null ? _ref.members.nonEmpty() : void 0) || [];
      this.columns = ((_ref1 = this.pivot.columns) != null ? _ref1.members.nonEmpty() : void 0) || [];
      return this.element.append("table").attr("class", "wv-pivot-table").call(this.renderTable);
    };

    PivotTableView.prototype.extractArgs = function(args) {
      if (args.data) {
        this.data = args.data;
      }
      if (args.element) {
        this.element = d3.selectAll(args.element);
      }
      this.viewType = args.viewType || args.view || this.detectViewType(args);
      if (this.viewType !== "text") {
        this.renderer = this.createRenderer(args);
      }
      this.formatLabel = args.formatLabel || function(l) {
        return l;
      };
      return this.formatData = args.formatData || (function(d) {
        if (d != null) {
          return d;
        } else {
          return "-";
        }
      });
    };

    PivotTableView.prototype.createRenderer = function(args) {
      var rendererClass;

      rendererClass = args.renderer || Wonkavision.renderers["default"] || Wonkavision.renderers.Rickshaw;
      return new rendererClass(this, args);
    };

    PivotTableView.prototype.memberSpan = function(member) {
      var _ref;

      return (_ref = member.members) != null ? _ref.nonEmpty().leaves().length : void 0;
    };

    PivotTableView.prototype.renderTable = function(tableSelection) {
      this.table = tableSelection;
      this.table.call(this.renderColumnHeaders);
      return this.table.call(this.renderTableData);
    };

    PivotTableView.prototype.renderColumnHeaders = function(tableSelection) {
      var ch, chr, colMembers, colnames, fillSpan, hrow, thead,
        _this = this;

      if (this.pivot.isFlat && this.pivot.measuresAxis === "rows") {
        colnames = _.map(this.pivot.axes[0].dimensions, function(dim) {
          return dim.name;
        });
        colnames = colnames.concat(this.pivot.cellset.measureNames);
        thead = tableSelection.append("thead");
        hrow = thead.append("tr").attr("class", "wv-col");
        return hrow.selectAll("th.wv-col-header").data(colnames).enter().append("th").text(function(name) {
          return _this.formatLabel(name);
        });
      } else {
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
          return _this.formatLabel(level.caption);
        }).attr("colspan", function(d) {
          return _this.memberSpan(d);
        }).attr("class", "wv-col-header");
      }
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
        return _this.formatLabel(level.caption);
      }).attr("rowspan", function(d) {
        return _this.memberSpan(d);
      }).attr("class", "wv-row-header");
      self = this;
      cell = rhr.selectAll("td.wv-cell").data(this.pivot.cellValues).enter().append("td").attr("class", "wv-cell");
      if (this.viewType === "text") {
        return cell.text(function(d) {
          return _this.formatData(d);
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
