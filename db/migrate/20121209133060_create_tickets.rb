class CreateTickets < ActiveRecord::Migration
  def change
	drop_table :tickets
    create_table :tickets do |t|
      t.integer :doctor_id
      t.integer :user_id
      t.string :date
      t.string :time
      t.integer :status_id

      t.timestamps
    end
  end
end
