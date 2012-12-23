$(function(){
	MTS.initialize();
	//User test
	MTS.Instances.User = new MTS.Views.UserView({el:".auth_win"});
	//Spec View test
	MTS.Instances.AllSpecializations =
		new MTS.Views.SpecializationCollectionView({el:"#spec_list"});
	//Doctor collection View test
	MTS.Instances.AllDoctors =
		new MTS.Views.DoctorCollectionView({el:"#doctors_list"});
	//TT
	MTS.Instances.SelectedDoctorsTT = new MTS.Collections.WorkWeeks();
	//Work day view test
	var table_week = new MTS.Views.WorkWeek();
	MTS.Instances.collectionDays = new MTS.Collections.WorkDayCollection();
	var table_day = new MTS.Views.WorkDayView();
	var week_event = new MTS.Views.Week();
	//Tickets test
	MTS.Instances.AllTickets = new MTS.Views.TicketCollectionView();
});