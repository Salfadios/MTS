MTS.Views.DoctorCollectionView = Backbone.View.extend({
	docs: new MTS.Collections.DoctorCollection(),
	initialize: function(){
		this.docs.on("reset", this.render, this);
		this.docs.fetch();
		console.log("Doctors collection initialized!");
	},
	render:function()
	{
		console.log(this.docs.models);
		this.showAll();
	},
	showOne: function(doctor){
		var view = new MTS.Views.DoctorView({model:doctor});
		view.render();
	},
	showAll: function(){
		$("doctors_list").empty();
		this.docs.each(this.showOne);
	}
});