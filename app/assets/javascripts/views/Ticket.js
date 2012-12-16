MTS.Views.TicketViewSmall = Backbone.View.extend({
	tagName: "div",
	template: JST["TicketSmall"],
	events: {
		"dblclick .ticket_small":"deleteTicket"
	},
	deleteTicket: function(){
		this.model.destroy();
	},
	render: function(container){
		this.$el.html(this.template(this.model.toJSON()));
		$(container).empty();
		$(container).append(this.el);
		return this;
	}
});