class User < ActiveRecord::Base
  attr_accessible :email, :fio, :password_digest
end
