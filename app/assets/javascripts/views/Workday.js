$(function(){
	MTS.Views.WorkDayView = Backbone.View.extend({
		el : $('#table_head'),
		el1 : $('#table_time'),
		//template_head: _.template($("#table_head_template").html()),
		//template_td : _.template($("#table_td_template").html()),
		
		initialize: function()
		{
			WorkWeek.on("reset", this.render, this);
		
			WorkWeek.fetch();
			console.log("Week TT initialized!");
		},
		getDayWeek : function()
		{
			var day = new Date();
			return day.getDay();
		},
		getColspan : function()
		{
			var duration = doctor.get('duration');
			var count = 60/duration;
			return count;
		},		
		render : function()
		{
			var day_time = this.model,
				week = JSON.parse(day_time.get('time')),
				day_week = this.getDayWeek(),
				from = week[day_week].from.split(':'),
				to = week[day_week].to.split(':'),
				i = 0,
				start_hour = Number(from[0]),
				end_hour = Number(to[0]),
				count_ticket = this.getColspan();
		
			day_time.set('colspan', day_time.get('colspan')/count_ticket);
		
			while(start_hour <= end_hour)
			{
				day_time.set('time_work', start_hour + ':' + from[1]);
				$(this.el).append(this.template_head(day_time.toJSON()));
				for(i = 0; i < count_ticket; i++)
				{
					if(i == 0)
						day_time.set('id', start_hour + '' + i * 60 / count_ticket + '0');
					else
						day_time.set('id', start_hour + '' + i * 60 / count_ticket);
					$(this.el1).append(this.template_td(day_time.toJSON()));
				}
				start_hour++;
			}
		}
	});
});