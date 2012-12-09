class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :doctorId
      t.integer :userId
      t.string :date
      t.string :time
      t.integer :statusId

      t.timestamps
    end
  end
end
