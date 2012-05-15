Filter = this.Wonkavision.Filter

describe "Filter", ->
  filter = null

  beforeEach ->
    filter = new Filter "dimname", 
      operator: "ne"
      memberType : "dimension"
      value : 12
      attributeName : "anattr"

  it "should initialize via options", ->
    expect(filter.toString()).toEqual("dimension::dimname::anattr::ne::12")

  it "should parse a fully qualified filter string", ->
    expect(Filter.parse("dimension::dimname::anattr::ne::12").toString())
    .toEqual("dimension::dimname::anattr::ne::12")

  it "should parse a fully qualified filter string with alternate delim", ->
    expect(Filter.parse("dimension.dimname.anattr.ne.12", ".").toString())
      .toEqual("dimension::dimname::anattr::ne::12")

  it "should allow the value to be added later", ->
    expect(Filter.parse("dimension.dimname.anattr.ne",".").withValue(12).toString())
      .toEqual("dimension::dimname::anattr::ne::12")

  it "should allow the member type to be omitted", ->
    expect(Filter.parse("dimname.anattr.ne.12", ".").toString())
      .toEqual("dimension::dimname::anattr::ne::12")

  it "should allow just the name to be specified", ->
    expect(Filter.parse("dimname").withValue(12).toString())
      .toEqual("dimension::dimname::key::eq::12")

  it "should allow just the name and attribute type to be specified", ->
    expect(Filter.parse("dimname.anattr",".").withValue(12).toString())
      .toEqual("dimension::dimname::anattr::eq::12")
