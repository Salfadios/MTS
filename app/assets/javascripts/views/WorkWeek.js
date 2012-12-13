MTS.Views.WorkWeek = Backbone.View.extend({
	template_week : JST["TemplateTrWeek"],
	template_day : JST["TemplateDay"],
	template_table : JST["TemplateTableWeek"],
	el : '#work-days',
	el_table : '.app',
	events: 
	{
      'click .hour-day' : 'showWorkDay'
    },
	
	initialize : function()
	{
		days = MTS.Instances.SelectedDoctorsTT;
		days.on("add", this.render, this);
		days.on("remove", this.deleteDoctor, this);
		//this.showTable();
	},
	check : function()
	{
		if(collectionDays.models.length>0)
		{
		for(j = 0; j < collectionDays.models.length; j++)
		{
			var model = collectionDays.models[j];
			if(model.get('doc_id') == id_doc)
			{
				alert("You have saw this doctor");
				return true;
			}
		}
		}
	},
	setModel : function()
	{
		var day_time = days.models[i];
		if(day_time.get('doctorId') == id_doc)
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
			day.set({duration: day_time.get('duration'),
				     doc_fio: day_time.get('doc_fio'),
					 doc_id: day_time.get('doctorId')});
			if(this.check() != true) 
				collectionDays.add(day);
		}
	},
	getId: function(e)
	{
		day = new MTS.Models.WorkDay();
		e = e || window.event;
		var el = e.target || e.srcElement;
		var doc_d = (el.id).split('__');
		return doc_d ;
	},
	showWorkDay : function (e)
	{
		var doc_day = this.getId(e);
		id_doc = doc_day[1];
		day_name = doc_day[2];
		for(i = 0; i < days.models.length;i++)
		{
			this.setModel();
		}		
	},
	showTable: function()
	{
		$(this.el_table).append(template_table());
	},
	render: function(day_time)
	{
		var div = '';
		week = JSON.parse(day_time.get('workingTimeHash'));
		for(j = 0; j < week.length; j++)
		{
			day_time.set('time_line', week[j].from + '-' + week[j].to);
			day_time.set('day', week[j].day);
			div += this.template_day(day_time.toJSON());
		}
		$(this.el).append(this.template_week(day_time.toJSON()));
		$("#wd_td_2__" + day_time.get("doctorId")).append(div);
		
	},
	deleteDoctor : function()
	{
	    this.$el.empty();
		for(i = 0; i<MTS.Instances.SelectedDoctorsTT.models.length; i++)
		{
			this.render(MTS.Instances.SelectedDoctorsTT.models[i]);
		}
	}
});