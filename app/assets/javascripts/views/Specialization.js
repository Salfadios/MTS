MTS.Views.SpecializationView = Backbone.View.extend({
	tagName: "li",
	className: "spec_list_item",
	template: JST["Specialization"],
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		$("#spec_list").append(this.el);
		return this;
	}
});