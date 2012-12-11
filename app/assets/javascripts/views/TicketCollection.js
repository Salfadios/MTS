MTS.Views.TicketCollectionView = Backbone.View.extend({
	el: ".app",
	board: new MTS.Collections.TicketCollection(),
	events: {
		"click .quarter":"addOne"
	},
	initialize: function(){
		this.board.on("reset", this.render, this);
		this.board.fetch();
		console.log("Ticket collection initialized!");
	},
	addOne: function(e){
		/*this.board.create({
			user_name: "Nochovniy Alexey",
			address: "Yunih Lenintsev 22/115",
			doctor_name: "Assanov S.",
			date: "30.11.2012",
			time: this.setTime(e)
		});*/
		console.log(e.target.id);
	},
	setTime: function(e){
		var tdId = e.target.id,
		hours = Math.floor(tdId/100),
		minutes = tdId%100;
		if(minutes == 0)
			minutes = "00";
		return hours + ":" + minutes;
	},
	render:function(){
		this.showAll();
	},
	showOne: function(ticket){
		var view = new MTS.Views.TicketViewSmall({model:ticket}),
		time = view.model.get('time').split(':'),
		cont_id = "#ticket__" + ticket.get("doctorId") +
			"__Mon__" + time[0] + "" + time[1];
		view.render(cont_id);
	},
	showAll: function(){
		this.$("#table_time td").empty();
		this.board.each(this.showOne);
	}
});