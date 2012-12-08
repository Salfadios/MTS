$(function(){
	MTS.initialize();
	day = new MTS.Models.WorkDay();
	var b = new MTS.Views.WorkDayView();
	MTS.Instances.AllTickets = new MTS.Views.TicketCollectionView();
});