class Ticket < ActiveRecord::Base
  belongs_to :user
  belongs_to :doctor
  
  attr_accessible :date, :doctor_id, :status_id, :time, :user_id
end
