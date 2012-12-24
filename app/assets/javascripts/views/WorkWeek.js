MTS.Views.WorkWeek = Backbone.View.extend({
	template_week: JST["TemplateTrWeek"],
	template_day: JST["TemplateDay"],
	template_table: JST["TemplateTableWeek"],
	template_head: JST["templateWeekHead"],
	el: '#work-days',
		
	initialize: function() {
		MTS.Instances.SelectedDoctorsTT.on("add", this.show, this);
		MTS.Instances.SelectedDoctorsTT.on("remove", this.show, this);
		count = 0;
		arreyAttr = [];
	},
	
	showTable: function(day_time) {
		var div = '';
	    var arreyDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var data = new Date();
		var day = data.getDate();
		var month = data.getMonth() + 1;
		var year = data.getFullYear();
		var day_week = data.getDay();
		day = day - day_week;
		for (var j = 0; j < arreyDay.length; j++) {
			day_time.set('day_name', arreyDay[j]);
			day_time.set('day', day + "-" + month + "-" + year);
			day = day + 1;
			div += this.template_head(day_time.toJSON());
		}
		$(this.el).append(this.template_table);
		$("#wd_th_2").append(div);
	},
	
	render: function(day_time) {
		var div = '';
		var data = new Date();
		var day = data.getDate();
		var month = data.getMonth() + 1;
		var year = data.getFullYear();
		var day_week = data.getDay();
		week = JSON.parse(day_time.get('workingTimeHash'));
		day = day - day_week;
		for (var j = 0; j < week.length; j++) {
			day_time.set('time_line', week[j].from + '-' + week[j].to);
			day_time.set('day', day + "-" + month + "-" + year);
			day = day + 1;
			div += this.template_day(day_time.toJSON());
		}
		$(this.el).append(this.template_week(day_time.toJSON()));
		$("#wd_td_2__" + day_time.get("doctor_id")).append(div);
	},
	
	show: function() {
	    this.$el.empty();
		this.showTable(MTS.Instances.SelectedDoctorsTT.models[0]);
		for (var i = 0; i < MTS.Instances.SelectedDoctorsTT.models.length; i++) {
			this.render(MTS.Instances.SelectedDoctorsTT.models[i]);
		}
		if (MTS.Instances.SelectedDoctorsTT.models.length <= 0) {
			 this.$el.empty();
			 for (var key in arreyAttr)
				delete arreyAttr[key];
		}
		for (var key in arreyAttr)
			$(arreyAttr[key]).css("background-color","lime");
	}	
});