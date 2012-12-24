MTS.Views.TicketViewSmall = Backbone.View.extend({
	tagName: "div",
	template: JST["TicketSmall"],
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
		this.$el.html(this.template(this.model.toJSON()));
		$(container).empty();
		$(container).append(this.el);
		return this;
	}
});