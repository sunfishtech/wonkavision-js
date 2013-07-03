this.Wonkavision.Member = class Member
  constructor : (@dimension, data) ->
    @key = data.key
    @caption = data.caption || @key
    @sort = data.sort || @caption
    @attributes = data.attributes || {}
    @totals = !!data.totals
  
  toString : -> key?.toString() || "<null>"

  toKey : -> key