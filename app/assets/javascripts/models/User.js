MTS.Models.User = Backbone.Model.extend({
	defaults:
	{
		id: 0
	},
	request: {},
	login: function(auth_data)
	{
		this.request = $.ajax({
			url: "/login",
			type: 'POST',
			data: auth_data,
			success: function(data, textStatus, response)
			{	
				var user_data = JSON.parse(response.responseText),
					finish;
				if (user_data.id)
				{
					finish = $.Event("auth_finished");
					$(".form").trigger(finish, user_data);
				}
				else
				{
					console.log("Invalid email or password!");
				}
			},
			error: function () {
				console.log("Ajax error...");
			}
		});
		
	},
	
	logout: function()
	{
		this.request = $.ajax({
			url: "/logout",
			type: 'POST',
			success: function(data, textStatus, response) {
				var user_data = JSON.parse(response.responseText),
					out = $.Event("logged_out");
				$(".form").trigger(out, user_data);
				console.log("Logged out!");
			},
			error: function () {
				console.log("Ajax error...");
			}
		});
	}
});