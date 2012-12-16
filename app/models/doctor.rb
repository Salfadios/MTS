class Doctor < ActiveRecord::Base
  belongs_to :specialization
  
  attr_accessible :duration, :fio, :specialization_id
end
