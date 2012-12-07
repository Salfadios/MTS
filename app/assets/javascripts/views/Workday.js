MTS.Views.WorkDayView = Backbone.View.extend({
	template_tr : JST["TemplateTr"],
	template_span : JST["TimetableTicket"],
	el_tr : $('#tablebody'),
	initialize : function()
	{
		var days = new MTS.Collections.WorkDayCollection();
		days.on("reset", this.render, this); 
		this.render();      
	},
	render : function()
	{
		var sp = '';
		var time = day.get('ticket_time').split(':');
		var from = day.get('from').split(':');
           var to = day.get('to').split(':');				
		for(j = 0; j <= 10; j++)
		{
			time[1] = 0;
			var count  = 60/day.get('duration');
			if(count == 1)
				day.set('duration_class', 'hour');
			if(count == 2)
				day.set('duration_class', 'half');
			if(count == 4)
				day.set('duration_class', 'quarter');
			for(i = 0; i < count; i++)
			{
				if(time[1] == 0)
					time[1] = "00";
				if(parseInt(time[0])>=parseInt(from[0])&&parseInt(time[0])<parseInt(to[0]))
					day.set('ticket_time', time[0] + ':' + time[1]);
				else
					day.set('ticket_time', '-');
				sp += this.template_span(day.toJSON());
				duration = day.get('duration') + 0;
				time[1] = parseInt(time[1]) + duration;
			}
			time[0]++;
			day.set('ticket_time', time[0]+':' + time[1]);
			day.set('ticket_t', time[0]+'' + time[1]);
		}
		day.set('span', sp);
		$(this.el_tr).append(this.template_tr(day.toJSON()));
	}
});