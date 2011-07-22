Member = this.Wonkavision.Member

this.Wonkavision.Dimension = class Dimension
  constructor : (@axis, data) ->
    @name = data.name
    @members = []
    for member in data.members
      @members.push(new Member(member))
  
  nonEmpty : (parents) ->
    members = []
    for mem in @members
      members.push(mem) unless this.isEmpty?(mem, parents)
    members
  
  isEmpty : (member, parents) ->
    key = parents.slice(0)
    key.push member.key
    @axis.totals[key].empty
    
  
  