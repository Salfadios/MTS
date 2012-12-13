class Specialization < ActiveRecord::Base
  has_many :doctor
  
  attr_accessible :name
end
