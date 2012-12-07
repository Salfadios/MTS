class CreateWorkingTimetables < ActiveRecord::Migration
  def change
    create_table :working_timetables do |t|
      t.integer :doctor_id
      t.string :working_time_json_hash

      t.timestamps
    end
  end
end
