class User < ActiveRecord::Base
  attr_accessible :fio, :last_login_date, :login, :password, :status_id
end
