Member = this.Wonkavision.Member

this.Wonkavision.Dimension = class Dimension
  constructor : (@axis, data) ->
    @name = data.name
    @members = []
    for member in data.members
      @members.push(new Member(member))
  

    
  
  