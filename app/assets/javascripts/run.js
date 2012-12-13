$(function(){
	MTS.initialize();
	//Spec View test
	MTS.Instances.AllSpecializations = new MTS.Views.SpecializationCollectionView({el:"#spec_list"});
	//Doctor collection View test
	MTS.Instances.AllDoctors = new MTS.Views.DoctorCollectionView({el:"#doctors_list"});
	MTS.Instances.SelectedSpecDoctors = new MTS.Collections.SpecializationCollection();
	MTS.Instances.SelectedDoctorsTT = new MTS.Collections.WorkWeeks();
	//Work day view test
	
	var t = new MTS.Views.WorkWeek();
	
	collectionDays = new MTS.Collections.WorkDayCollection();
	var t1 = new MTS.Views.WorkDayView();
	
	MTS.Instances.AllTickets = new MTS.Views.TicketCollectionView();
});