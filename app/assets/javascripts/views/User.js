MTS.Views.UserView = Backbone.View.extend({
	model: {},
	initialize: function () {
		this.model = new MTS.Models.User(),
		this.model.on("logged_in", this.getUserData());
	},
	events: {
		"click #login_btn": "authorize"
	},
	authorize: function () {
		console.log("It works!");
		var credentials = $(".form").serialize();
		this.model.login(credentials);
	},
	getUserData: function () {
		console.log(this.model.request.reponseText);
	}
});