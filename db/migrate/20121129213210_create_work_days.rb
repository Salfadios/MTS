class CreateWorkDays < ActiveRecord::Migration
  def change
    create_table :work_days do |t|
      t.string :doctor_full_name
      t.string :time
      t.integer :duration

      t.timestamps
    end
  end
end
