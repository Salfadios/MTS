MTS.Views.UserView = Backbone.View.extend({
	initialize: function ()
	{
		this.model = new MTS.Models.User();
	},
	events:
	{
		//Log in/out click handlers
		"click #login_btn": "login",
		"click #logout_link": "logout",
		//Ajax answer handlers
		"auth_finished .form": "loginCallback",
		"logged_out .form": "logoutCallback"
	},
	login: function ()
	{
		var credentials = $(".form").serialize();
		this.model.login(credentials);
	},
	logout: function ()
	{
		this.model.logout();
	},
	
	loginCallback: function (event, data)
	{
		this.model.set(data);
		this.hideForm();
		this.showGreeting();
	},
	logoutCallback: function (event, data)
	{
		this.model.set(data);
		this.showForm();
		this.hideGreeting();
	},
	
	hideForm: function ()
	{
		$(".form").hide();
		console.log("Form hidden!");
	},
	showForm: function ()
	{
		$(".form").show();
		console.log("Form shown!");
	},
	hideGreeting: function ()
	{
		$(".greet_win").hide();
		console.log("Bie!");
	},
	showGreeting: function ()
	{
		$(".greeting").html("Hi, " + this.model.get("fio") + "!");
		$(".greet_win").show();
		console.log("Hello!");
	}
});