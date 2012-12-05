MTS.Collections.TicketCollection = Backbone.Collection.extend({
	model: MTS.Models.Ticket,
	url: "/tickets"
});