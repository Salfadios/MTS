MTS.Views.TicketView = Backbone.View.extend({
	template: JST["Ticket"],
	events: {
		"dblclick .ticket":"deleteTicket"
	},
	deleteTicket: function(){
		this.model.destroy({wait: true});
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		$(".content_right").append(this.el);
		return this;
	}
});