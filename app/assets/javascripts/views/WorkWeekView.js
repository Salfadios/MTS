MTS.Views.WorkWeekView = Backbone.View.extend({
	template_week : JST["TemplateTrWeek"],
	template_day : JST["TemplateDay"],
	el : '#work-days',
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
		
	}
});