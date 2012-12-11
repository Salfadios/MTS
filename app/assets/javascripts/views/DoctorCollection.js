MTS.Views.DoctorCollectionView = Backbone.View.extend({
	tagName:"ul",
	id:"doctors_list",
	events:	{
		"click .doctor_list_item":"addDoctor"
	},
	docs: new MTS.Collections.DoctorCollection(),
	initialize: function(){
		this.docs.on("reset", this.render, this);
		this.docs.fetch();
		console.log("Doctors collection initialized!");
	},
	render:function()
	{
		this.showAll();
	},
	showOne: function(doctor){
		var view = new MTS.Views.DoctorView({model:doctor});
		view.render();
	},
	showAll: function(){
		$("#doctors_list").empty();
		_.each(this.docs.models, this.showOne, this);
		console.log("Doctors have been renedered!");
	},
	addDoctor: function(){
		
	}
});