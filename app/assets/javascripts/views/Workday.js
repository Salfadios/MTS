MTS.Views.WorkDayView = Backbone.View.extend({
	template_day : JST["TemplateTableDay"],
	initialize : function()
	{
		view_day = new MTS.Views.WorkDay();
		dayCollection = MTS.Instances.collectionDays;
		dayCollection.on("add", this.show, this);
		dayCollection.on("remove", this.show, this);
	},
	
	showTable: function()
	{
		$(view_day.el_tr).append(this.template_day);
	},
	
	show : function()
	{
		
		$(view_day.el_tr).empty();
		this.showTable();
		for(var p = 0; p<MTS.Instances.collectionDays.models.length; p++)
		{
			view_day.render(MTS.Instances.collectionDays.models[p]);
			
		}
		if(MTS.Instances.collectionDays.models.length<=0)
			$(view_day.el_tr).empty();
	}
});