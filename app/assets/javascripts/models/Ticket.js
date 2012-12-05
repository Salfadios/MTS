MTS.Models.Ticket = Backbone.Model.extend({
	defaults:{
		ticket_number: 0,
		user: "none",
		address: "none",
		doctor: "none",
		date: "00/00/0000",
		time: "0:00",
		coord_x: 0,
		coord_y: 0
	}
});