Member = this.Wonkavision.Member

this.Wonkavision.Dimension = class Dimension
  constructor : (@axis, data, @keyIndex) ->
    @name = data.name
    @members = _.sortBy(
    	_.map(data.members, (mem) => new Member(this, mem)),
    	(member) -> member.sort
    )
    if @axis.cellset.includeTotals
      @members.push @createTotalMember()

  rawMembers: ->
    if @axis.cellset.includeTotals
      @members.slice(0,@members.length-1)
    else
      @members

  sortBy : (sortFunc) ->
    @members = @rawMembers()
    @members = _.sortBy(@members, sortFunc)  
    if @axis.cellset.includeTotals
      @members.push(@createTotalMember())

  createTotalMember: -> new Member(this, {key:null, caption:"#{@name}_total", totals:true})

  
  