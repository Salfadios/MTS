class Ticket < ActiveRecord::Base
  attr_accessible :date, :doctor_name, :duration, :state, :time, :user_name
end
