MTS.Views.TicketCollectionView = Backbone.View.extend({
	el: ".app",
	board: new MTS.Collections.TicketCollection(),
	events: {
		"click .quarter, .half":"addOne",
	},
	initialize: function(){
		this.board.on("all", this.render, this);
		this.board.fetch();
		console.log("Ticket collection initialized!");
	},
	addOne: function(e){
		var ticket_data = e.target.id.split("__"),
			another_ticket = this.board.where({
				user_id: 1,
				doctor_id: parseInt(ticket_data[1]),
				date: ticket_data[2]
			});
		console.log(ticket_data);	
		if (ticket_data[0] !== "" &&
			$(e.target).hasClass("color_ticket"))
		{
			console.log(another_ticket.length);
			if (another_ticket.length === 0)
			{
				this.createNewTicket(ticket_data);
			}
		}
	},
	createNewTicket: function(info)
	{
		this.board.create({
			user_id: 1,
			doctor_id: info[1],
			date: info[2],
			time: this.getTime(info[3])
		},{wait: true});
	},
	getTime: function(num){
		hours = Math.floor(num/100),
		minutes = num%100;
		if(minutes == 0)
			minutes = "00";
		return hours + ":" + minutes;
	},
	render:function(){
		$(".quarter, .half").empty();
		this.showAll();
	},
	showOne: function(ticket){
		var view = new MTS.Views.TicketViewSmall({model:ticket}),
		time = view.model.get('time').split(':'),
		cont_id = "#ticket__" + ticket.get("doctor_id") +
			"__" + ticket.get("date") + "__" + time[0] + "" + time[1];
		view.render(cont_id);
		//console.log(cont_id);
	},
	showAll: function(){
		this.$("#table_time td").empty();
		this.board.each(this.showOne);
	}
});