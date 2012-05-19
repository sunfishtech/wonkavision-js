(function() {
  var Cellset, responseData, responseData2;
  Cellset = this.Wonkavision.Cellset;
  responseData = JSON.parse(this.test_data.wv_query_response);
  responseData2 = JSON.parse(this.test_data.wv_query_response2);
  describe("Axis", function() {
    var axis, cellset;
    cellset = null;
    axis = null;
    beforeEach(function() {
      cellset = new Cellset(responseData);
      return axis = cellset.axes[0];
    });
    it("should extract the dimensions", function() {
      expect(axis.dimensions.length).toEqual(1);
      return expect(axis.dimensions[0]).not.toBeNull();
    });
    return it("should extract a list of dimension names", function() {
      return expect(axis.dimensionNames).toEqual(["context_date"]);
    });
  });
  describe("Levels", function() {
    var cellset, columns, rows;
    cellset = null;
    columns = null;
    rows = null;
    beforeEach(function() {
      cellset = new Cellset(responseData2);
      columns = cellset.axes[0];
      return rows = cellset.axes[1];
    });
    it("should register a level for each member of the root dimension", function() {
      expect(columns.levels.length).toEqual(12);
      expect(columns.levels.at(0).member).toEqual(columns.dimensions[0].members[0]);
      expect(rows.levels.length).toEqual(1);
      return expect(rows.levels.at(0).member).toEqual(rows.dimensions[0].members[0]);
    });
    it("should register child levels when there are multiple dimensions in an axis", function() {
      return expect(rows.levels.at(0).levels.length).toEqual(1);
    });
    describe("Level", function() {
      it("should initialize its axis from its parent", function() {
        expect(rows.levels.at(0).axis.name).toEqual("rows");
        return expect(rows.levels.at(0).levels.at(0).axis.name).toEqual("rows");
      });
      it("should take its caption from its member", function() {
        return expect(rows.levels.at(0).caption).toEqual(rows.levels.at(0).member.caption);
      });
      it("should calculate its depth relative to its axis", function() {
        expect(columns.levels.at(0).depth).toEqual(0);
        expect(rows.levels.at(0).depth).toEqual(0);
        return expect(rows.levels.at(0).levels.at(0).depth).toEqual(1);
      });
      it("should indicate if any descendent leaves contain a cell", function() {
        expect(columns.levels.at(0).isEmpty).toEqual(true);
        expect(columns.levels.at(1).isEmpty).toEqual(false);
        return expect(rows.levels.at(0).levels.at(0).isEmpty).toEqual(false);
      });
      it("should indicate if the level is a leaf level", function() {
        expect(columns.levels.at(0).isLeaf).toEqual(true);
        expect(rows.levels.at(0).isLeaf).toEqual(false);
        return expect(rows.levels.at(0).levels.at(0).isLeaf).toEqual(true);
      });
      return it("should return itself for leaves when a leaf", function() {
        var leaves;
        leaves = columns.levels.at(0).leaves();
        expect(leaves.length).toEqual(1);
        return expect(leaves[0].caption).toEqual(columns.levels.at(0).caption);
      });
    });
    return describe("LevelCollection", function() {
      it("should return a level by key", function() {
        return expect(rows.levels.get("30 day").key).toEqual(["30 day"]);
      });
      it("should track length", function() {
        return expect(columns.levels.length).toEqual(12);
      });
      it("should iterate the levels using each", function() {
        var collected;
        collected = [];
        columns.levels.each(function(l) {
          return collected.push(l);
        });
        return expect(collected.length).toEqual(12);
      });
      it("should present a collection of non empty levels", function() {
        var nonempty;
        nonempty = columns.levels.nonEmpty();
        return expect(nonempty.length).toEqual(7);
      });
      it("should retrieve levels by index", function() {
        return expect(rows.levels.at(0).caption).toEqual("30 day");
      });
      it("should present an ordered list of leaf levels", function() {
        return expect(columns.levels.leaves().length).toEqual(12);
      });
      it("should filter empty leaves", function() {
        return expect(columns.levels.leaves(true).length).toEqual(7);
      });
      it("should find leaves at a depth > 1", function() {
        expect(rows.levels.leaves().length).toEqual(1);
        return expect(rows.levels.leaves()[0].caption).toEqual("2012-01-01");
      });
      it("should provide a depth first collection of all notes via allLevels", function() {
        var allLevels;
        allLevels = rows.levels.flatten();
        expect(allLevels.length).toEqual(2);
        expect(allLevels[0].caption).toEqual("30 day");
        return expect(allLevels[1].caption).toEqual("2012-01-01");
      });
      it("should partition levels horizontally", function() {
        var part;
        part = rows.levels.partitionH();
        expect(part.length).toEqual(1);
        return expect(part[0].length).toEqual(2);
      });
      it("should partition levels, depth last", function() {
        var part;
        part = rows.levels.partitionV();
        expect(part.length).toEqual(2);
        expect(part[0].length).toEqual(1);
        return expect(part[1].length).toEqual(1);
      });
      return it("should append measures using appendMeasures", function() {
        var flat;
        rows.appendMeasures();
        flat = rows.levels.flatten();
        expect(flat.length).toEqual(3);
        expect(flat[2].caption).toEqual("30d_rate");
        expect(flat[2].key).toEqual(["30 day", "2012-01-01", "@30d_rate"]);
        return expect(flat[1].isLeaf).toEqual(false);
      });
    });
  });
}).call(this);
