MTS.Views.UserView = Backbone.View.extend({
	initialize: function ()
	{
		this.model = new MTS.Models.User();
		this.checkSession();
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
		this.saveSession(data);
	},
	logoutCallback: function (event, data)
	{
		this.model.set(data);
		this.showForm();
		this.hideGreeting();
		this.deleteSession();
		$(".content_right").empty();
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
	},
	saveSession: function (user_info)
	{
		for (var i in user_info)
			if (user_info.hasOwnProperty(i))
				window.sessionStorage.setItem(i, user_info[i])
		console.log("Session data stored!");
	},
	deleteSession: function ()
	{
		window.sessionStorage.clear();
	},
	checkSession: function ()
	{
		var user_info = {};
		if (window.sessionStorage.getItem("id"))
		{
		
			this.model.set({
				id:window.sessionStorage.getItem("id"), 
				fio: window.sessionStorage.getItem("fio"),
				email: window.sessionStorage.getItem("email")
			});
			this.hideForm();
			this.showGreeting();
		}
		else
		{
			this.showForm();
			this.hideGreeting();
		}
	}
});