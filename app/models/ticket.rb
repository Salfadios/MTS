class Ticket < ActiveRecord::Base
  attr_accessible :date, :doctorId, :statusId, :time, :userId
end
