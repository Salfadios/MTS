MTS.Views.WorkWeek = Backbone.View.extend({
	template_week: JST["TemplateTrWeek"],
	template_day: JST["TemplateDay"],
	template_table: JST["TemplateTableWeek"],
	template_head: JST["templateWeekHead"],
	
	el: '#work-days',
			
	initialize: function() {
		MTS.Instances.SelectedDoctorsTT.on("add", this.show, this);
		MTS.Instances.SelectedDoctorsTT.on("remove", this.show, this);
		arreyAttr = [];
		this.data = 0, this.day = 0, this.month = 0, this.year = 0, this.day_week = 0;
	},
	
	getData: function() {
		this.data = new Date();
		this.day = this.data.getDate();
		this.month = this.data.getMonth() + 1;
		this.year = this.data.getFullYear();
		this.day_week = this.data.getDay();
	},
	
	showTable: function(day_time) {
		var div = '', arreyDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.getData();
	   	this.day = this.day - this.day_week;
		for (var j = 0; j < arreyDay.length; j++) {
			day_time.set('day_name', arreyDay[j]);
			day_time.set('day', this.day + "-" + this.month + "-" + this.year);
			this.day = this.day + 1;
			div += this.template_head(day_time.toJSON());
		}
		$(this.el).append(this.template_table);
		$("#wd_th_2").append(div);
	},
	
	render: function(day_time) {
		var div = '';
		this.getData();
		week = JSON.parse(day_time.get('workingTimeHash'));
		this.day = this.day - this.day_week;
		for (var j = 0; j < week.length; j++) {
			day_time.set('time_line', week[j].from + '-' + week[j].to);
			day_time.set('day', this.day + "-" + this.month + "-" + this.year);
			this.day = this.day + 1;
			div += this.template_day(day_time.toJSON());
		}
		$(this.el).append(this.template_week(day_time.toJSON()));
		$("#wd_td_2__" + day_time.get("doctor_id")).append(div);
	},
	
	elemHidden: function() {
	    $("#work-days").css("visibility", "hidden");
		$("#lable-table").css("visibility", "hidden");
		$("#time-table").css("visibility", "hidden");
	},
	
	show: function() {	    
		$(this.el).empty();
		$("#lable-table").css("visibility", "visible");
		$(this.el).css("visibility", "visible");
		if (MTS.Instances.SelectedDoctorsTT.models.length <= 0) {
			this.$el.empty();
			 for (var key in arreyAttr)
				delete arreyAttr[key];
			this.elemHidden();
		} else {
			this.showTable(MTS.Instances.SelectedDoctorsTT.models[0]);
			for (var i = 0; i < MTS.Instances.SelectedDoctorsTT.models.length; i++) {
				this.render(MTS.Instances.SelectedDoctorsTT.models[i]);
			}
			for (var key in arreyAttr)
				$(arreyAttr[key]).css("background-color","lime");
		}
	}	
});