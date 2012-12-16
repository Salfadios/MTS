class Ticket < ActiveRecord::Base
  belongs_to :user
  
  attr_accessible :date, :doctor_id, :statusId, :time, :user_id
end
