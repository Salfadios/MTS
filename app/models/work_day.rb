class WorkDay < ActiveRecord::Base
  attr_accessible :doctor_full_name, :duration, :time
end
