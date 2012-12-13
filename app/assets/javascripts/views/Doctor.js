MTS.Views.DoctorView = Backbone.View.extend({
	tagName: "li",
	template: JST["Doctor"],
	events: {
		"click .doctor_list_item":"addDoctor",
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		$("#doctors_list").append(this.el);
		return this;
	},
	addDoctor:function() {
		if (!this.$el.attr("style"))
		{
			this.addThisDoctorTT(this.model);
			this.$el.css("background-color","lime");
		}
		else
		{
			this.removeThisDoctorTT(this.model);
			this.$el.removeAttr("style");
		}
	},
	addThisDoctorTT: function(doc){
		var tt = new MTS.Models.WorkWeek();
		tt.url = "/working_timetables/" + doc.id;
		tt.set({doc_fio: doc.get("fio"),
			    doctorId: doc.id,
				duration: doc.get("duration")});
		tt.fetch();
		MTS.Instances.SelectedDoctorsTT.add(tt);
		console.log(MTS.Instances.SelectedDoctorsTT.models);
	},
	removeThisDoctorTT: function(doc){
		console.log(MTS.Instances.SelectedDoctorsTT.where({id:doc.id}));
	}
});