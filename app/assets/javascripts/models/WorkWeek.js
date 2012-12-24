MTS.Models.WorkWeek = Backbone.Model.extend({
	defaults: {
		doc_fio: 'Ivanov',
		workingTimeHash:  '[{ "day" : "Sun", "from" : "11:00", "to" : "15:00"}, { "day" : "Mon", "from" : "15:00", "to" : "18:00"},' + 
						  '{ "day" : "Tue", "from" : "12:00", "to" : "16:00"}, { "day" : "Wed", "from" : "8:00", "to" : "11:00"},' +
						  '{ "day" : "Thu", "from" : "9:00", "to" : "13:00"}, { "day" : "Fri", "from" : "12:00", "to" : "16:00"},' +
						  '{ "day" : "Sat", "from" : "15:00", "to" : "18:00"}]',
		doctor_id: 1,
		specialization_id: 1,
		day: 'none',
		day_name: 'none',
		div: '',
		time_line: '', 
		duration: 0
	}
});
