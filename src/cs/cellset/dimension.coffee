Member = this.Wonkavision.Member

this.Wonkavision.Dimension = class Dimension
  constructor : (@axis, data, @keyIndex) ->
    @name = data.name
    @members = _.sortBy(
    	_.map(data.members, (mem) => new Member(this, mem)),
    	(member) -> member.sort
    )  
  
  