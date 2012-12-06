MTS.Models.WorkDay = Backbone.Model.extend(
{
	defaults: 
	{
		doc_fio : "Ivanov",
		duration : 60,
		from : "13:00",
		to : "16:00",
		ticket_time : "08:00",
		doc_id : 1,
		data : "Mon",
		specialization_id : 1,
		span : "",
		ticket_t : 0,
		duration_class : ''
	}
});