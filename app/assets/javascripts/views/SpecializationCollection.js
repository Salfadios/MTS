MTS.Views.SpecializationCollectionView = Backbone.View.extend({
	tagName:"ul",
	id:"specs_list",
	specs: new MTS.Collections.SpecializationCollection(),
	initialize: function(){
		this.specs.on("reset", this.render, this);
		this.specs.fetch();
		console.log("Doctors collection initialized!");
	},
	events: {
		"click .spec_list_item":"addSpec"
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
	addSpec: function(e) {
		console.log(e.target);
	}
});