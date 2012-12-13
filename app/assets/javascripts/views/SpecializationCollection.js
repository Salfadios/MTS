MTS.Views.SpecializationCollectionView = Backbone.View.extend({
	specs: new MTS.Collections.SpecializationCollection(),
	initialize: function(){
		MTS.Instances.SelectedSpecDoctors = new MTS.Collections.SpecializationCollection();
		this.specs.on("reset", this.render, this);
		this.specs.fetch();
		console.log("Doctors collection initialized!");
	},
	events: {
		"click .spec_list_item":"clickSpec"
	},
	render:function()
	{
		this.showAll();
	},
	showOne: function(spec){
		var view = new MTS.Views.SpecializationView({model:spec});
		view.render();
	},
	showAll: function(){
		$("spec_list").empty();
		this.specs.each(this.showOne);
	},
	clickSpec: function(e) {
		var id = e.target.id.split("__")[1];
		
		if (!$(e.target).attr("style"))
		{
			this.addThisSpecDoctor(id);
			$(e.target).css("background-color","lime");
		}
		else
		{
			this.removeThisSpecDoctor();
			$(e.target).removeAttr("style");
		}
	},
	addThisSpecDoctor: function(spec_id){
		var spec = new MTS.Collections.DoctorCollection();
		spec.url = "/specializations/" + spec_id;
		spec.fetch({success:function() {
			MTS.Instances.SelectedSpecDoctors.add(spec);
		}});
	},
	removeThisSpecDoctor : function(spec_id)
	{
		var models = MTS.Instances.SelectedSpecDoctors.where({id:spec_id});
		MTS.Instances.SelectedSpecDoctors.remove(models);
	}
});