MTS.Views.WorkWeek = Backbone.View.extend({
	template_week : JST["TemplateTrWeek"],
	template_day : JST["TemplateDay"],
	template_table : JST["TemplateTableWeek"],
	el : '#work-days',
	
	events: 
	{
      'click .hour-day' : 'showWorkDay',
	  'click .work-days' : 'showWorkDay'
    },
	
	initialize : function()
	{
		days = MTS.Instances.SelectedDoctorsTT;
		days.on("add", this.show, this);
		days.on("remove", this.show, this);
		count = 0;
		arreyAttr = new Array;
	},
	
	setModel : function(day_time)
	{
		day = new MTS.Models.WorkDay();
		if(day_time.get('doctor_id') == id_doc || id_doc == 'th')
		{
			w = JSON.parse(day_time.get('workingTimeHash'));
			for(var j = 0; j < w.length; j++)
			{
				if(w[j].day == day_name)
				{
					day.set('from', w[j].from);
					day.set('to', w[j].to);
				}
			}	
			day.set({duration: day_time.get('duration'),
				     doc_fio: day_time.get('doc_fio'),
					 doc_id: day_time.get('doctor_id'),
					 data: day_name});
			MTS.Instances.collectionDays.add(day);
		}
	},
	
	getId: function(e)
	{
		e = e || window.event;
		var el = e.target || e.srcElement;
		var doc_d = (el.id).split('__');
		if ($('#' + el.id).attr("style"))
		{
			alert("You have saw this doctor in this day");
			return true;
		}
		else 
		{
			$('#' + el.id).css("background-color","lime");
			arreyAttr[doc_d[1]] = '#' + el.id;
		}
		return doc_d ;
	},
	
	showWorkDay : function (e)
	{
		var doc_day = this.getId(e);
		if(doc_day == true)
			return;
		id_doc = doc_day[1];
		day_name = doc_day[2];
		for(var i = 0; i < days.models.length;i++)
		{
			this.setModel(days.models[i]);
		}		
	},
	
	showTable: function()
	{
		$(this.el).append(this.template_table);
	},
	
	render: function(day_time)
	{
		var div = '';
		week = JSON.parse(day_time.get('workingTimeHash'));
		for(var j = 0; j < week.length; j++)
		{
			day_time.set('time_line', week[j].from + '-' + week[j].to);
			day_time.set('day', week[j].day);
			div += this.template_day(day_time.toJSON());
		}
		$(this.el).append(this.template_week(day_time.toJSON()));
		$("#wd_td_2__" + day_time.get("doctor_id")).append(div);
		
	},
	
	show : function()
	{
	    this.$el.empty();
		this.showTable();
		for(var i = 0; i<MTS.Instances.SelectedDoctorsTT.models.length; i++)
		{
			this.render(MTS.Instances.SelectedDoctorsTT.models[i]);
		}
		if(MTS.Instances.SelectedDoctorsTT.models.length<=0)
			 this.$el.empty();
		for(var key in arreyAttr)
			$(arreyAttr[key]).css("background-color","lime");
	}
	
	
});