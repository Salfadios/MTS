# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  specializations= Specialization.create([{name:'Therapists'}])
  specializations= Specialization.create([{name:'Surgeon'}])
  doctors = Doctor.create([{fio:'Kovalenko',specialization_id:'1',duration:'15'}])
  doctors = Doctor.create([{fio:'Teslenko',specialization_id:'1',duration:'30'}])
  doctors = Doctor.create([{fio:'Agafonov',specialization_id:'2',duration:'30'}])
  tickets = Ticket.create([{doctor_id:'1',user_id:'1',date:'27-12-2012',time:'16:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'3',user_id:'1',date:'27-12-2012',time:'16:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'1',user_id:'2',date:'27-12-2012',time:'15:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'2',user_id:'1',date:'27-12-2012',time:'16:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'2',user_id:'2',date:'27-12-2012',time:'15:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'3',user_id:'3',date:'27-12-2012',time:'15:30',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'3',user_id:'1',date:'28-12-2012',time:'16:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'1',user_id:'1',date:'28-12-2012',time:'16:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'3',user_id:'2',date:'28-12-2012',time:'15:00',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'1',user_id:'3',date:'28-12-2012',time:'15:30',status_id:'NULL'}])
  tickets = Ticket.create([{doctor_id:'2',user_id:'1',date:'28-12-2012',time:'14:00',status_id:'NULL'}])

working_timetables = WorkingTimetable.create([{doctor_id:'1',workingTimeHash:'[{ "day" : "Sun", "from" : "10:00", "to" : "15:00"}, { "day" : "Mon", "from" : "15:00", "to" : "18:00"}, { "day" : "Tue", "from" : "12:00", "to" : "16:00"}, { "day" : "Wed", "from" : "8:00", "to" : "11:00"}, { "day" : "Thu", "from" : "9:00", "to" : "13:00"}, { "day" : "Fri", "from" : "12:00", "to" : "16:00"}, { "day" : "Sat", "from" : "15:00", "to" : "18:00"}]'}])
working_timetables = WorkingTimetable.create([{doctor_id:'2',workingTimeHash:'[{ "day" : "Sun", "from" : "08:00", "to" : "13:00"}, { "day" : "Mon", "from" : "11:00", "to" : "14:00"}, { "day" : "Tue", "from" : "10:00", "to" : "14:00"}, { "day" : "Wed", "from" : "09:00", "to" : "11:00"}, { "day" : "Thu", "from" : "9:00", "to" : "12:00"}, { "day" : "Fri", "from" : "10:00", "to" : "15:00"}, { "day" : "Sat", "from" : "16:00", "to" : "18:00"}]'}])
working_timetables = WorkingTimetable.create([{doctor_id:'3',workingTimeHash:'[{ "day" : "Sun", "from" : "12:00", "to" : "15:00"}, { "day" : "Mon", "from" : "15:00", "to" : "18:00"}, { "day" : "Tue", "from" : "12:00", "to" : "16:00"}, { "day" : "Wed", "from" : "8:00", "to" : "11:00"}, { "day" : "Thu", "from" : "9:00", "to" : "13:00"}, { "day" : "Fri", "from" : "12:00", "to" : "16:00"}, { "day" : "Sat", "from" : "15:00", "to" : "18:00"}]'}])
  
