MTS.Views.DoctorCollectionView = Backbone.View.extend({
	tagName:"ul",
	id:"doctors_list",
	docs: new MTS.Collections.DoctorCollection(),
	initialize: function(){
		this.docs.on("all", this.render, this);
		console.log("Doctors collection initialized!");
	},
	render:function() {
		this.showAll();
	},
	showOne: function(doctor){
		var view = new MTS.Views.DoctorView({model:doctor});
		for (var key in arreyAttr) {
			if (key != 'wd_day__' + doctor.id + "__" + view.model.get('data'))
				delete arreyAttr[key];
		}
		view.render();
	},
	showAll: function(){
		$("#doctors_list").empty();
		_.each(this.docs.models, this.showOne, this);
		console.log("Doctors have been renedered!");
	}
});