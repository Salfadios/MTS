class Doctor < ActiveRecord::Base
  attr_accessible :full_name, :specialization_id, :time_limit
end
