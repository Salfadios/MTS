class Doctor < ActiveRecord::Base
  belongs_to :specialization
  has_many :ticket
  
  attr_accessible :duration, :fio, :specialization_id
end
