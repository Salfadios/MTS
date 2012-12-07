MTS.Views.TicketCollectionView = Backbone.View.extend({
	el: "body",
	events: {
		"click #table_time td":"addOne"
	},
	initialize: function(){
		Board = new TicketCollection();
		Board.on("reset", this.render, this);
		Board.fetch();
		console.log("Tickets initialized!");
	},
	addOne: function(e){
		Board.create({
			user_name: "Nochovniy Alexey",
			address: "Yunih Lenintsev 22/115",
			doctor_name: "Assanov S.",
			date: "30.11.2012",
			time: this.setTime(e)
		});
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
		var view, sticker, i, max = Board.models.length;
		this.$("#table_time td").empty();
		for (i = 0; i < max; i++)
		{
			sticker = Board.models[i];
			console.log(sticker);
			view = new MTS.Views.TicketViewSmall({model:sticker});
			var time = view.model.get('time').split(':');
			//var id = '#' + time[0] + '' + time[1];
			view.render(".app");
		}
	}
});