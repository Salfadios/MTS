class Ticket < ActiveRecord::Base
  attr_accessible :date, :datetime, :doctor_id, :duration, :status_id, :user_id
end
