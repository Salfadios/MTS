<<<<<<< HEAD
# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121129213210) do

  create_table "doctors", :force => true do |t|
    t.string   "full_name"
    t.integer  "specialization_id"
    t.integer  "time_limit"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
  end

  create_table "tickets", :force => true do |t|
    t.string   "doctor_name"
    t.string   "user_name"
    t.string   "time"
    t.string   "state"
    t.integer  "duration"
    t.string   "date"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "work_days", :force => true do |t|
    t.string   "doctor_full_name"
    t.string   "time"
    t.integer  "duration"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

end
=======
# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121206201010) do

  create_table "doctors", :force => true do |t|
    t.string   "full_name"
    t.integer  "specialization_id"
    t.integer  "time_limit"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
  end

  create_table "specializations", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "ticket_statuses", :force => true do |t|
    t.string   "name"
    t.string   "desc"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "tickets", :force => true do |t|
    t.string   "doctor_name"
    t.string   "user_name"
    t.string   "time"
    t.string   "state"
    t.integer  "duration"
    t.string   "date"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "fio"
    t.string   "login"
    t.integer  "status_id"
    t.string   "password"
    t.string   "last_login_date"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "users_statuses", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "work_days", :force => true do |t|
    t.string   "doctor_full_name"
    t.string   "time"
    t.integer  "duration"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

  create_table "working_timetables", :force => true do |t|
    t.integer  "doctor_id"
    t.string   "working_time_json_hash"
    t.datetime "created_at",             :null => false
    t.datetime "updated_at",             :null => false
  end

end
>>>>>>> 02faaa2709495634cb4bc48673d7113be5718b71
