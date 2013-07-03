Member = this.Wonkavision.Member

this.Wonkavision.Dimension = class Dimension
  constructor : (@axis, data, @keyIndex) ->
    @name = data.name
    @members = _.sortBy(
    	_.map(data.members, (mem) => new Member(this, mem)),
    	(member) -> member.sort
    )
    if @axis.cellset.includeTotals
      @members.push new Member(this, {key:null, caption:"#{@name}_total", totals:true})

  sortBy : (sortFunc) ->
    @members = _.sortBy(@members, sortFunc)  
  
  