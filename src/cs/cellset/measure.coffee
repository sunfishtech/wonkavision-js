this.Wonkavision.Measure = class Measure
	constructor : (data) ->
		@name = data.name
		@value = data.value
		@formattedValue = data.formatted_value || @value.toString()
		@calculated = data.calculated || false
		@empty = !@value

	toString : -> @formatted_value