MTS.Views.WorkWeek = Backbone.View.extend({
	template_week : JST["TemplateTrWeek"],
	template_day : JST["TemplateDay"],
	el : '#work-days',
	events: 
	{
      'click #work-days' : 'showWorkDay'
    },
	
	initialize : function()
	{
		days = new MTS.Collections.WorkWeeks();
		days.fetch();
		doctors = new MTS.Collections.DoctorCollection();
		doctors.fetch();
		this.render();      
	},
	showWorkDay : function (e)
	{
		e = e || window.event;
		var el = e.target || e.srcElement;
		var doc_day = (el.id).split('__');
		id_doc = doc_day[1];
		day_name = doc_day[2];
		alert(doc_day[1]);
		alert(doc_day[2]);
		
	},
	render: function()
	{
		var div = '';
		for(i = 0; i < days.models.length;i++)
		{
			d = days.models[i];
		}
    	week = JSON.parse(day_time.get('Workingtimehash'));
		for(i = 0; i < week.length; i++)
		{
			day_time.set('time_line', week[i].from + '-' + week[i].to);
			day_time.set('day', week[i].day);
			div += this.template_day(day_time.toJSON());
		}
		$(this.el).append(this.template_week(day_time.toJSON()));
		$("#wd_td_2__" + day_time.get("Doctorid")).append(div);
	}
});