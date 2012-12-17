MTS.Views.Week = Backbone.View.extend({
	el: '#work-days',
	
	events: {
      'click .hour-day': 'showWorkDay',
	  'click .work-days': 'showWorkDay'
    },
	
	showWorkDay: function (e) {
		var doc_day = this.getId(e);
		if (doc_day == true)
			return;
		var id_doc = doc_day[1];
		var day_name = doc_day[2];
		for (var i = 0; i < MTS.Instances.SelectedDoctorsTT.models.length; i++) {
			var model = MTS.Instances.SelectedDoctorsTT.models[i];
		this.setModel(model, id_doc, day_name);
		}		
	},
	
	getId: function(e) {
		var modelD = '';
		e = e || window.event;
		var el = e.target || e.srcElement;
		var doc_d = (el.id).split('__');
		if ($('#' + el.id).attr("style")) {
			if (doc_d[1] == 'th') {
				modelD = MTS.Instances.collectionDays.where({data:doc_d[2]});
				for (var i = 0; i < modelD.length; i++) {
					var model = modelD[i];
			        delete arreyAttr['wd_day__' + model.get('doc_id') + "__" + doc_d[2]];
				    $('#wd_day__' + model.get('doc_id') + "__" + doc_d[2]).removeAttr("style");
			        }
			} else {
				modelD = MTS.Instances.collectionDays.where({doc_id:parseInt(doc_d[1]),
														 data:doc_d[2]});
			}
		    MTS.Instances.collectionDays.remove(modelD);
			delete arreyAttr[el.id];
			$('#' + el.id).removeAttr("style");
			return true; 
		} 
		else
			$('#' + el.id).css("background-color","lime");
		return doc_d ;
	},
	
	setModel: function(day_time, id_doc, day_name) {
		var flag_set = false;
		for (var i = 0; i < MTS.Instances.collectionDays.models.length; i++) {
			var model = MTS.Instances.collectionDays.models[i];
			if (model.get('data') == day_name && day_time.get('doctor_id') == model.get('doc_id')) 
				return;
			else
				flag_set = false;
		}
		if (flag_set == false) {
		var day = new MTS.Models.WorkDay();
		if (day_time.get('doctor_id') == id_doc || id_doc == 'th') {
			var w = JSON.parse(day_time.get('workingTimeHash'));
			for (var j = 0; j < w.length; j++) {
				if (w[j].day == day_name) {
					day.set('from', w[j].from);
					day.set('to', w[j].to);
				}
			}	
			day.set({duration: day_time.get('duration'),
				     doc_fio: day_time.get('doc_fio'),
					 doc_id: day_time.get('doctor_id'),
					 data: day_name});
			MTS.Instances.collectionDays.add(day);
			arreyAttr['wd_day__' + day_time.get('doctor_id') + "__" +  day_name] = '#wd_day__' + day_time.get('doctor_id') + "__" +  day_name;
			$('#wd_day__' + day_time.get('doctor_id') + "__" +  day_name).css("background-color","lime");
			
		}
		}
	}
});