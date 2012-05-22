(function() {
  var Cellset, ChartTable, PivotTable, responseData;
  Cellset = this.Wonkavision.Cellset;
  PivotTable = this.Wonkavision.PivotTable;
  ChartTable = this.Wonkavision.ChartTable;
  responseData = JSON.parse(this.test_data.wv_query_response2);
  describe("Pivot Table", function() {
    var cellset, columns, pivot, rows;
    cellset = null;
    pivot = null;
    columns = null;
    rows = null;
    beforeEach(function() {
      cellset = new Cellset(responseData);
      pivot = new PivotTable(cellset, {
        measuresOn: "none"
      });
      columns = pivot.columns;
      return rows = pivot.rows;
    });
    it("should register a member for each member of the root dimension", function() {
      expect(columns.members.length).toEqual(12);
      expect(columns.members.at(0).member).toEqual(columns.dimensions[0].members[0]);
      expect(rows.members.length).toEqual(1);
      return expect(rows.members.at(0).member).toEqual(rows.dimensions[0].members[0]);
    });
    it("should register child members when there are multiple dimensions in an axis", function() {
      return expect(rows.members.at(0).members.length).toEqual(1);
    });
    it("should return a set of cell values for a row", function() {
      var vals;
      vals = pivot.cellValues(rows.members.at(0).members.at(0));
      expect(vals.length).toEqual(7);
      return expect(vals[0]).not.toBeNull();
    });
    describe("ChartTable", function() {
      var chart;
      chart = null;
      beforeEach(function() {
        return chart = new ChartTable(cellset);
      });
      it("should default the series source to rows", function() {
        return expect(chart.seriesSource).toEqual("rows");
      });
      it("should take x axis dimension from the columns", function() {
        expect(chart.xAxisDimension.name).toEqual("customer");
        return expect(chart.columns.isEmpty).toEqual(true);
      });
      it("should take the series dimension from the rows", function() {
        expect(chart.seriesDimension.name).toEqual("date");
        return expect(chart.rows.dimensions.length).toEqual(1);
      });
      describe("cellValue", function() {
        return it("should provide an array of series (x,y) pairs", function() {
          var series;
          series = chart.cellValue(chart.rows.members.nonEmpty().leaves()[0]);
          expect(series.length).toEqual(1);
          expect(series[0].name).toEqual("2012-01-01");
          expect(series[0].data.length).toEqual(12);
          expect(series[0].data[0].x).toEqual("Air Angels");
          expect(series[0].data[1].x).toBeDefined();
          return expect(series[0].data[1].x).not.toBeNull();
        });
      });
      return describe("cellValue with dimension series", function() {
        beforeEach(function() {
          return chart = new ChartTable(cellset, {
            seriesSource: "measures"
          });
        });
        return it("should provide an array of series (x,y) pairs", function() {
          var series;
          series = chart.cellValue(chart.rows.members.nonEmpty().leaves()[0]);
          return console.log(series);
        });
      });
    });
    describe("Member", function() {
      it("should initialize its axis from its parent", function() {
        expect(rows.members.at(0).axis.name).toEqual("rows");
        return expect(rows.members.at(0).members.at(0).axis.name).toEqual("rows");
      });
      it("should take its caption from its member", function() {
        return expect(rows.members.at(0).caption).toEqual(rows.members.at(0).member.caption);
      });
      it("should calculate its depth relative to its axis", function() {
        expect(columns.members.at(0).depth).toEqual(0);
        expect(rows.members.at(0).depth).toEqual(0);
        return expect(rows.members.at(0).members.at(0).depth).toEqual(1);
      });
      it("should indicate if any descendent leaves contain a cell", function() {
        expect(columns.members.at(0).isEmpty).toEqual(true);
        expect(columns.members.at(1).isEmpty).toEqual(false);
        return expect(rows.members.at(0).members.at(0).isEmpty).toEqual(false);
      });
      it("should indicate if the member is a leaf member", function() {
        expect(columns.members.at(0).isLeaf).toEqual(true);
        expect(rows.members.at(0).isLeaf).toEqual(false);
        return expect(rows.members.at(0).members.at(0).isLeaf).toEqual(true);
      });
      return it("should return itself for leaves when a leaf", function() {
        var leaves;
        leaves = columns.members.at(0).leaves();
        expect(leaves.length).toEqual(1);
        return expect(leaves[0].caption).toEqual(columns.members.at(0).caption);
      });
    });
    return describe("MemberCollection", function() {
      it("should return a member by key", function() {
        return expect(rows.members.get("30 day").key).toEqual(["30 day"]);
      });
      it("should track length", function() {
        return expect(columns.members.length).toEqual(12);
      });
      it("should iterate the members using each", function() {
        var collected;
        collected = [];
        columns.members.each(function(l) {
          return collected.push(l);
        });
        return expect(collected.length).toEqual(12);
      });
      it("should present a collection of non empty members", function() {
        var nonempty;
        nonempty = columns.members.nonEmpty();
        return expect(nonempty.length).toEqual(7);
      });
      it("should retrieve members by index", function() {
        return expect(rows.members.at(0).caption).toEqual("30 day");
      });
      it("should present an ordered list of leaf members", function() {
        return expect(columns.members.leaves().length).toEqual(12);
      });
      it("should filter empty leaves", function() {
        return expect(columns.members.leaves(true).length).toEqual(7);
      });
      it("should find leaves at a depth > 1", function() {
        expect(rows.members.leaves().length).toEqual(1);
        return expect(rows.members.leaves()[0].caption).toEqual("2012-01-01");
      });
      it("should provide a depth first collection of all notes via allLevels", function() {
        var allLevels;
        allLevels = rows.members.flatten();
        expect(allLevels.length).toEqual(2);
        expect(allLevels[0].caption).toEqual("30 day");
        return expect(allLevels[1].caption).toEqual("2012-01-01");
      });
      it("should partition members horizontally", function() {
        var part;
        part = rows.members.partitionH();
        expect(part.length).toEqual(1);
        return expect(part[0].length).toEqual(2);
      });
      it("should partition members, depth last", function() {
        var part;
        part = rows.members.partitionV();
        expect(part.length).toEqual(2);
        expect(part[0].length).toEqual(1);
        return expect(part[1].length).toEqual(1);
      });
      it("should append measures using appendMeasures", function() {
        var flat;
        rows.appendMeasures();
        flat = rows.members.flatten();
        expect(flat.length).toEqual(3);
        expect(flat[2].caption).toEqual("30d_rate");
        expect(flat[2].key).toEqual(["30 day", "2012-01-01", "@30d_rate"]);
        return expect(flat[1].isLeaf).toEqual(false);
      });
      return it("should retrieve cell values with appended measures", function() {
        var vals;
        rows.appendMeasures();
        vals = pivot.cellValues(rows.members.at(0).members.at(0));
        expect(vals.length).toEqual(7);
        return expect(vals[0]).not.toBeNull();
      });
    });
  });
}).call(this);
