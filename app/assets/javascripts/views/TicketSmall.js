MTS.Views.TicketViewSmall = Backbone.View.extend({
	tagName: "div",
	className: "cont",
	template: JST ["TicketSmall"],
	events: {
		"dblclick .ticket_small":"deleteTicket"
	},
	deleteTicket: function(){
		var user = window.sessionStorage.getItem("id"),
		ticket_owner = this.model.get("user_id");
		if (user)
		{
			if (parseInt(user) === ticket_owner)
				this.model.destroy({wait: true});
			else
				console.log("It's not your ticket!");
		}
		else
		{
			console.log("Not authorized!!!");
		}
	},
	render: function(container){
		var user = parseInt(window.sessionStorage.getItem("id"));
		this.$el.html(this.template(this.model.toJSON()));
		$(container).empty();
		if (this.model.get("user_id") === user)
			this.$el.toggleClass("my_ticket");
		$(container).append(this.el);
		return this;
	}
});