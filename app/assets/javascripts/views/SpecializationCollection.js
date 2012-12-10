MTS.Views.SpecializationCollectionView = Backbone.View.extend({
	specs: new MTS.Collections.SpecializationCollection(),
	initialize: function(){
		this.specs.on("reset", this.render, this);
		this.specs.fetch();
		console.log("Doctors collection initialized!");
	},
	render:function()
	{
		console.log(this.specs.models);
		this.showAll();
	},
	showOne: function(spec){
		var view = new MTS.Views.SpecializationView({model:spec});
		view.render();
	},
	showAll: function(){
		$("spec_list").empty();
		this.specs.each(this.showOne);
	}
});