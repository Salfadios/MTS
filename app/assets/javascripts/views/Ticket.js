MTS.Views.TicketViewSmall = Backbone.View.extend({
	template: JST["TicketSmall"],
	events: {
		"click .ticket-small":"stop",
		"dblclick .ticket-small":"deleteTicket"
	},
	stop: function(){
		return false;
	},
	deleteTicket: function(){
		this.model.destroy();
	},
	render: function(container){
		//this.$el.html(this.template(this.model.toJSON()));
		$(container).css({"background-color":"#bbffff", "color":"#000000"});
		return this;
	}
});