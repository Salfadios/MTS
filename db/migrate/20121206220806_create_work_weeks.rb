class CreateWorkWeeks < ActiveRecord::Migration
  def change
    create_table :work_weeks do |t|

      t.timestamps
    end
  end
end
