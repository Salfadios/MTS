class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :doctor_name
      t.string :user_name
      t.string :time
      t.string :state
      t.integer :duration
      t.string :date

      t.timestamps
    end
  end
end
