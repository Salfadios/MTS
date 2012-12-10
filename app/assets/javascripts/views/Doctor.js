MTS.Views.DoctorView = Backbone.View.extend({
	tagName: "li",
	className: "doctor_list_item",
	template: JST["Doctor"],
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		$("#doctors_list").append(this.el);
		return this;
	}
});