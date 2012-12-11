MTS.Views.WorkWeek = Backbone.View.extend({
	template_week : JST["TemplateTrWeek"],
	template_day : JST["TemplateDay"],
	el : '#work-days',
	
	events: 
	{
      'click .hour-day' : 'showWorkDay'
    },
	
	initialize : function()
	{
		//days = new MTS.Collections.WorkWeeks();
		days = MTS.Instances.SelectedDoctorsTT;
		days.on("add", this.render, this);
		//days.fetch();
		//doctors = new MTS.Collections.DoctorCollection();
		//doctors.fetch(); 
	},
	showWorkDay : function (e)
	{
		e = e || window.event;
		var el = e.target || e.srcElement;
		var doc_day = (el.id).split('__');
		id_doc = doc_day[1];
		day_name = doc_day[2];
		this.$el.empty();
		for(i = 0; i < days.models.length;i++)
		{
			var day_time = days.models[i];
			if(day_time.get('doctorId')==id_doc)
			{
				w = JSON.parse(day_time.get('workingTimeHash'));
				for(j = 0; j < w.length; j++)
				{
					if(w[j].day == day_name)
					{
						day.set('from', w[j].from);
						day.set('to', w[j].to);
					}
				}
				
			}
		}
		var b = new MTS.Views.WorkDayView();
		
	},
	render: function()
	{
		
		for(i = 0; i < days.models.length;i++)
		{
		var div = '';
		var	day_time = days.models[i];
		week = JSON.parse(day_time.get('workingTimeHash'));
		for(j = 0; j < week.length; j++)
		{
			day_time.set('time_line', week[j].from + '-' + week[j].to);
			day_time.set('day', week[j].day);
			div += this.template_day(day_time.toJSON());
		}
		$(this.el).append(this.template_week(day_time.toJSON()));
		$("#wd_td_2__" + day_time.get("doctorId")).append(div);
		}
	}
});