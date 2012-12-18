class CreateWorkingTimetables < ActiveRecord::Migration
  def change
    create_table :working_timetables do |t|
      t.integer :doctor_id
      t.string :workingTimeHash

      t.timestamps
    end
  end
end
