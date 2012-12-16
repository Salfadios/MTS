class User < ActiveRecord::Base
  has_many :ticket
  
  has_secure_password
  
  attr_accessible :fio, :email, :password, :password_confirmation
  
  validates_uniqueness_of :email
end
