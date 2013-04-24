(function() {
  var Client, Query, client, query, test_data;

  Client = this.Wonkavision.Client;

  Query = this.Wonkavision.Query;

  test_data = this.test_data;

  client = null;

  query = null;

  beforeEach(function() {
    client = new Client();
    return query = new Query(client);
  });

  describe("Query", function() {
    it("should be able to be instantiated", function() {
      return expect(new Query(client)).not.toBeNull;
    });
    describe("axis query methods", function() {
      it("should create select method for each axis", function() {
        var axis, _i, _len, _ref, _results;

        _ref = Wonkavision.AXIS_NAMES;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          axis = _ref[_i];
          _results.push(expect(query[axis]).not.toBeNull);
        }
        return _results;
      });
      return it("should configure axis selections from the axis methods", function() {
        query.columns("a", "b");
        return expect(query.axes[0]).toEqual(["a", "b"]);
      });
    });
    describe("select", function() {
      it("should set the selected dimensions to the appropriate axis location", function() {
        query.select("columns")("hi", "ho");
        return expect(query.axes[0]).toEqual(["hi", "ho"]);
      });
      it("should append dimension names", function() {
        query.select("columns")("hi", "ho");
        query.select("columns")("hee", "ha");
        return expect(query.axes[0]).toEqual(["hi", "ho", "hee", "ha"]);
      });
      return it("should properly index the specified axis", function() {
        query.select("rows")("hi", "ho");
        expect(query.axes[0]).toBeNull;
        return expect(query.axes[1]).toEqual(["hi", "ho"]);
      });
    });
    describe("measures", function() {
      it("should record selected measures", function() {
        query.measures("m1", "m2");
        return expect(query.selectedMeasures).toEqual(["m1", "m2"]);
      });
      return it("should append measure not replace them", function() {
        query.measures("m1", "m2");
        query.measures("m3", "m4");
        return expect(query.selectedMeasures).toEqual(["m1", "m2", "m3", "m4"]);
      });
    });
    describe("from", function() {
      it("should store the provided cube and aggregation names", function() {
        query.from("a", "b");
        expect(query.cubeName).toEqual("a");
        return expect(query.aggregationName).toEqual("b");
      });
      return it("should default to the cube name", function() {
        query.from("a");
        expect(query.cubeName).toEqual("a");
        return expect(query.aggregationName).toEqual("a");
      });
    });
    describe("cube", function() {
      return it("should set the cube name", function() {
        return expect(query.cube("c").cubeName).toEqual("c");
      });
    });
    describe("aggregation", function() {
      return it("should set the aggregation name", function() {
        return expect(query.aggregation("a").aggregationName).toEqual("a");
      });
    });
    describe("where", function() {
      it("should parse the provided criteria into filters", function() {
        query.where({
          dima: 1,
          "dimb.attr.gt": "happy"
        });
        expect(query.filters[0].toString()).toEqual("dimension::dima::key::eq::1");
        return expect(query.filters[1].toString()).toEqual("dimension::dimb::attr::gt::happy");
      });
      return it("should append not replace filters", function() {
        query.where({
          dima: 1
        });
        query.where({
          dimb: 2
        });
        return expect(query.filters.length).toEqual(2);
      });
    });
    return describe("toParams", function() {
      return it("should prepare a delimited hash of params", function() {
        var expected;

        query.measures("m1", "m2").columns("c1", "c2").rows("r1", "r2").from("c", "a").where({
          r1: 3,
          "r2.key.gt": 4
        });
        expected = {
          measures: "m1|m2",
          columns: "c1|c2",
          rows: "r1|r2",
          filters: "dimension::r1::key::eq::3|dimension::r2::key::gt::4"
        };
        return expect(query.toParams()).toEqual(expected);
      });
    });
  });

}).call(this);
