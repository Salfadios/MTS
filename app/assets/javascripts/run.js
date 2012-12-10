$(function(){
	MTS.initialize();
	//Spec View test
	MTS.Instances.AllDoctors = new MTS.Views.SpecializationCollectionView();
	//Doctor collection View test
	MTS.Instances.AllDoctors = new MTS.Views.DoctorCollectionView();
	//Work day view test
	day = new MTS.Models.WorkDay();
	day_time = new MTS.Models.WorkWeek();
	var b = new MTS.Views.WorkDayView();
	var t = new MTS.Views.WorkWeek();
	//
	MTS.Instances.AllTickets = new MTS.Views.TicketCollectionView();
});