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
	removeThisDoctorTT : function(doc)
	{
		model = MTS.Instances.SelectedDoctorsTT.where({id:doc.id});
		MTS.Instances.SelectedDoctorsTT.remove(model);
		modelDay = MTS.Instances.collectionDays.where({doc_id:doc.id});
		MTS.Instances.collectionDays.remove(modelDay);
		for(var key in arreyAttr)
		{
			delete arreyAttr[doc.id];
		}
			
	},
	addDoctor:function() {
		if (!this.$el.attr("style"))
		{
			this.addThisDoctorTT(this.model);
			this.$el.css("background-color","lime");
		}
		else
		{
			this.$el.removeAttr("style");
			this.removeThisDoctorTT(this.model);
		}
	},
	addThisDoctorTT: function(doc){
		var tt = new MTS.Models.WorkWeek();
		tt.url = "/working_timetables/" + doc.id;
		tt.set({doc_fio: doc.get("fio"),
			    doctorId: doc.id,
				duration: doc.get("duration")});
		tt.fetch({success:function() {
			MTS.Instances.SelectedDoctorsTT.add(tt);
		}});
	}
});