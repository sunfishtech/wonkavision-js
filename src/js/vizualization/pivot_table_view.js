(function() {
  var MovingCalculation, PivotTableView, Utilities;

  MovingCalculation = this.Wonkavision.MovingCalculation;

  Utilities = this.Wonkavision.Utilities;

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
      }
      if (this.pivot.isFlat && this.viewType === "text") {
        this.pivot.pivot();
      }
      this.dataTable = this.pivot.createDataTable();
      if (this.suppressMeasureHeaders == null) {
        this.suppressMeasureHeaders = this.pivot.cellset.measureNames.length < 2;
      }
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
      this.renderer = this.viewType === "text" ? args.cellRenderer : this.createRenderer(args);
      this.formatLabel = args.formatLabel || function(l) {
        return l;
      };
      this.formatData = args.formatData || (function(d) {
        if (d.formattedValue != null) {
          return d.formattedValue;
        } else {
          return "-";
        }
      });
      this.smooth = args.smooth;
      if (this.smooth) {
        this.smoothingMethod = args.smoothingMethod;
        this.smoothingWindow = args.smoothingWindow || 30;
      }
      return this.suppressMeasureHeaders = args.suppressMeasureHeaders;
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
      this.dataRows = [];
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
        hrow = thead.append("tr").classed("wv-col", true);
        return hrow.selectAll("th.wv-col-header").data(colnames).enter().append("th").text(function(name) {
          return _this.formatLabel(name);
        });
      } else {
        colMembers = this.dataTable.columnMembers;
        thead = tableSelection.append("thead");
        chr = thead.selectAll("tr.wv-col").data(this.filterColHeaders(colMembers)).enter().append("tr").attr("class", "wv-col");
        fillSpan = this.pivot.rows.dimensions.length + (this.pivot.measuresAxis === "rows" && !this.suppressMeasureHeaders ? 1 : 0);
        chr.append("th").attr("colspan", fillSpan);
        return ch = chr.selectAll("th.wv-col-header").data((function(d) {
          return d;
        }), function(d) {
          return d.key.toString();
        }).enter().append("th").text(function(level) {
          return _this.formatLabel(level.caption);
        }).attr("colspan", function(d) {
          return _this.memberSpan(d);
        }).attr("class", "wv-col-header").classed("wv-totals", function(d) {
          return d.totals;
        });
      }
    };

    PivotTableView.prototype.renderTableData = function(tableSelection) {
      var cell, rh, rhr, self, tbody,
        _this = this;

      tbody = tableSelection.append("tbody");
      rhr = tbody.selectAll("tr.wv-row").data(this.dataTable.rows).enter().append("tr").classed("wv-row", true).classed("wv-totals", function(tr) {
        return tr.totalsRow;
      });
      rh = rhr.selectAll("th.wv-row-header").data((function(row) {
        return _this.filterRowHeaders(row.rowMembers);
      }), function(member) {
        return member.key.toString();
      }).enter().append("th").text(function(level) {
        return _this.formatLabel(level.caption);
      }).attr("rowspan", function(d) {
        return _this.memberSpan(d);
      }).attr("class", "wv-row-header").classed("wv-totals", function(d) {
        return d.totals;
      });
      self = this;
      cell = rhr.selectAll("td.wv-cell").data(function(row) {
        return row.cells;
      }).enter().append("td").classed("wv-cell", true).classed("wv-totals", function(tc) {
        return tc.totalsCell;
      });
      if (this.viewType === "text") {
        return cell.each(function(data, idx) {
          return self.renderCell(data, idx, this);
        });
      } else {
        return cell.each(function(data, idx) {
          return self.renderGraph(data, idx, this);
        });
      }
    };

    PivotTableView.prototype.filterRowHeaders = function(levels) {
      var data;

      if (!(levels.length > 0)) {
        return levels;
      }
      data = levels;
      if ((_.last(data).isMeasure != null) && this.suppressMeasureHeaders) {
        data = data.slice(0, -1);
      }
      return data;
    };

    PivotTableView.prototype.filterColHeaders = function(headerRows) {
      if (this.suppressMeasureHeaders && this.pivot.measuresAxis === "columns") {
        return headerRows.slice(0, -1);
      } else {
        return headerRows;
      }
    };

    PivotTableView.prototype.renderCell = function(tableCell, idx, cell) {
      var _this = this;

      this.renderer || (this.renderer = function(tableCell, idx, cell) {
        var _ref;

        return d3.select(cell).attr("data-wv-filters", (_ref = tableCell.cell) != null ? _ref.filters.join(",") : void 0).text(function(tc) {
          return _this.formatData(tc);
        });
      });
      return this.renderer(tableCell, idx, cell);
    };

    PivotTableView.prototype.renderGraph = function(chartCell, idx, cell) {
      var container, data;

      data = this.prepareSeries(chartCell.series);
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

    PivotTableView.prototype.prepareSeries = function(data) {
      var _this = this;

      return data = _.map(data, function(series) {
        return {
          name: _this.formatLabel(series.name),
          data: _this.prepareSeriesData(series.data)
        };
      });
    };

    PivotTableView.prototype.prepareSeriesData = function(data) {
      var calc,
        _this = this;

      if (this.smoothingMethod != null) {
        calc = new MovingCalculation({
          windowSize: this.smoothingWindow,
          calculation: this.smoothingMethod
        });
        _.each(data, function(point) {
          return calc.add(_this.keyToDate(point.x), parseFloat(point.y || 0));
        });
        return _.map(calc.values.slice(this.smoothingWindow), function(point) {
          return {
            x: point[0],
            y: point[1]
          };
        });
      } else {
        return _.map(data, function(point) {
          return {
            x: _this.keyToDate(point.x),
            y: parseFloat(point.y) || 0
          };
        });
      }
    };

    PivotTableView.prototype.keyToDate = function(keyStr) {
      return Utilities.keyToDate(keyStr, false).unix() * 1000;
    };

    return PivotTableView;

  })();

}).call(this);
