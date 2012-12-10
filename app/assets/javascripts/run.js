$(function(){
	MTS.initialize();
	day = new MTS.Models.WorkDay();
	day_time = new MTS.Models.WorkWeek();
	var b = new MTS.Views.WorkDayView();
	var t = new MTS.Views.WorkWeek();
	//
	MTS.Instances.AllTickets = new MTS.Views.TicketCollectionView();
});