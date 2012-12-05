class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :full_name
      t.integer :specialization_id
      t.integer :time_limit

      t.timestamps
    end
  end
end
