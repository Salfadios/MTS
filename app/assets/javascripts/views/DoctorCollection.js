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
		view.render();
	},
	showAll: function(){
		$("#doctors_list").empty();
		$("#lable-doctor").css("visibility", "visible");
		$(this.el).css("visibility", "visible");
		if (this.docs.models.length <= 0) {
			$("#lable-doctor").css("visibility", "hidden");
			$(this.el).css("visibility", "hidden");
		} else {
			_.each(this.docs.models, this.showOne, this);
			console.log("Doctors have been renedered!");
		}
	}
});