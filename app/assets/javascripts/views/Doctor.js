MTS.Views.DoctorView = Backbone.View.extend({
	template: JST["Doctor"],//_.template($("#doctor-tamplate").html()),
	initialize: function(){
		console.log("View test:");
		console.log(this);
		console.log(this.model);
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.html(this.model.toJSON());
		$(".app").append(this.el);
		return this;
	}
});