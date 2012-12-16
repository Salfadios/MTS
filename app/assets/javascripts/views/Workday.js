MTS.Views.WorkDayView = Backbone.View.extend({
	template_day: JST["TemplateTableDay"],
	view_day: new MTS.Views.WorkDay(),
		
	initialize: function() {
		MTS.Instances.collectionDays.on("add", this.show, this);
		MTS.Instances.collectionDays.on("remove", this.show, this);
	},
	
	showTable: function() {
		$(this.view_day.el_tr).append(this.template_day);
	},
	
	show : function() {
		$(this.view_day.el_tr).empty();
		this.showTable();
		for (var p = 0; p < MTS.Instances.collectionDays.models.length; p++) {
			this.view_day.render(MTS.Instances.collectionDays.models[p]);
		}
		
		if (MTS.Instances.collectionDays.models.length <= 0)
			$(this.view_day.el_tr).empty();
	}
});