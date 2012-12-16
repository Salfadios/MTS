class CreateDoctors < ActiveRecord::Migration
  def change
    drop_table :doctors
    create_table :doctors do |t|
      t.string :fio
      t.integer :specialization_id
      t.integer :duration

      t.timestamps
    end
  end
end
