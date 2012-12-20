MTS.Models.User = Backbone.Model.extend({
	defaults: {
		id: 0,
		name: "Default user",
		authenticity_token:"ii4yG9oyELn1wx8son/gVLMkLi5v4ZeU0rZ+o8gBsnM=",
		status: "Unlogged"
	},
	
	auth: function(auth_data) {
		var ajax = $.ajax({
			url: "/sessions#create.json",
			type: 'POST',
			data: auth_data,
			success: function(data, textStatus, response) {	
				console.log(response);
				console.log("Logged");
			},
			error: function () {
				console.log("Ajax error...");
			}
		});
		
	},
	
	logout: function() {
		$.ajax({
			url: "/sessions#destroy.json",
			type: 'POST',
			success: function(data, textStatus, response) {	
				document.cookie = null;
				console.log("Unlogged");
			},
			error: function () {
				console.log("Ajax error...");
			}
		});
	}
});