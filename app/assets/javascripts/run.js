$(function(){
	MTS.initialize();
	//Spec View test
	//MTS.Instances.AllDoctors = new MTS.Views.SpecializationCollectionView();
	//Doctor collection View test
	MTS.Instances.AllDoctors = new MTS.Views.DoctorCollectionView({el:"#doctors_list"});
	MTS.Instances.SelectedDoctorsTT = new MTS.Collections.WorkWeeks();
	//Work day view test
	day = new MTS.Models.WorkDay();
//	day_time = new MTS.Models.WorkWeek();
	//var b = new MTS.Views.WorkDayView();
	var t = new MTS.Views.WorkWeek();
	//
	MTS.Instances.AllTickets = new MTS.Views.TicketCollectionView();
});