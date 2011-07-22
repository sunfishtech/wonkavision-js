this.Wonkavision.Member = class Member
	constructor : (data) ->
		@key = data.key
		@caption = data.caption || @key
		@attributes = data.attributes || {}
	
	toString : -> key.toString()

	toKey : -> key