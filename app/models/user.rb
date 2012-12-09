class User < ActiveRecord::Base
  attr_accessible :fio, :login, :password, :statusId
end
