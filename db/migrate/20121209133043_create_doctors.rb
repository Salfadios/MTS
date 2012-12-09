class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :fio
      t.integer :specializationId
      t.integer :duration

      t.timestamps
    end
  end
end
