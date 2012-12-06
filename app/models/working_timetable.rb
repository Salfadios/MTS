class WorkingTimetable < ActiveRecord::Base
  attr_accessible :doctor_id, :working_time_json_hash
end
