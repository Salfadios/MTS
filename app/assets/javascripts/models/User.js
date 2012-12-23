MTS.Models.User = Backbone.Model.extend({
	defaults: {
		id: 0,
		name: "Default user",
		authenticity_token:"ii4yG9oyELn1wx8son/gVLMkLi5v4ZeU0rZ+o8gBsnM=",
		status: "Unlogged"
	},
	request: {},
	login: function(auth_data) {
		this.request = $.ajax({
			url: "/sessions#create.json",
			type: 'POST',
			data: auth_data,
			success: function(data, textStatus, response) {	
				var user_data = JSON.parse(response.responseText);
				if (user_data.id)
				{
					console.log("Logged in!");
				}
				else
				{
					console.log("Invalid email or password!");
					console.log(user_data);
				}
			},
			error: function () {
				console.log("Ajax error...");
			}
		});
		
	},
	
	logout: function() {
		this.request = null;
		this.request = $.ajax({
			url: "/logout",
			type: 'POST',
			success: function(data, textStatus, response) {	
				document.cookie = null;
				console.log("Logged out!");
				console.log(response.responseText);
			},
			error: function () {
				console.log("Ajax error...");
			}
		});
	}
});