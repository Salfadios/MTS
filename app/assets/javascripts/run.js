$(function(){
	MTS.initialize();
	//Spec View test
	MTS.Instances.AllSpecializations = new MTS.Views.SpecializationCollectionView({el:"#spec_list"});
	//Doctor collection View test
	MTS.Instances.AllDoctors = new MTS.Views.DoctorCollectionView({el:"#doctors_list"});
	MTS.Instances.SelectedSpecDoctors = new MTS.Collections.SpecializationCollection();
	MTS.Instances.SelectedDoctorsTT = new MTS.Collections.WorkWeeks();
	//Work day view test
	
	var table_week = new MTS.Views.WorkWeek();
	MTS.Instances.collectionDays = new MTS.Collections.WorkDayCollection();
	var table_day = new MTS.Views.WorkDayView();
	var week_event = new MTS.Views.Week();
	MTS.Instances.AllTickets = new MTS.Views.TicketCollectionView();
	//User test
	MTS.Instances.User = 
		new MTS.Models.User();
});