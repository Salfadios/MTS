class CreateWorkingTimetables < ActiveRecord::Migration
  def change	
    create_table :working_timetables do |t|
      t.integer :doctorId
      t.string :workingTimeHash

      t.timestamps
    end
  end
end
