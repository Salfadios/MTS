class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :doctor_id
      t.integer :user_id
      t.string :date
      t.string :datetime
      t.integer :status_id
      t.integer :duration

      t.timestamps
    end
  end
end
