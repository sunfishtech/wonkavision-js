Member = this.Wonkavision.Member

this.Wonkavision.Dimension = class Dimension
  constructor : (@axis, data) ->
    @name = data.name
    @members = _.sortBy(
    	_.map(data.members, (mem) -> new Member(mem)),
    	(member) -> member.sort
    )  
  
  