class Doctor < ActiveRecord::Base
  belongs_to :specialization
  
  attr_accessible :duration, :fio, :specializationId
end
