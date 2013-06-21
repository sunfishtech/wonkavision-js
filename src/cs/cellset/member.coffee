this.Wonkavision.Member = class Member
  constructor : (@dimension, data) ->
    @key = data.key
    @caption = data.caption || @key
    @sort = data.sort || @caption
    @attributes = data.attributes || {}
  
  toString : -> key.toString()

  toKey : -> key