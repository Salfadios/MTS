class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fio
      t.string :login
      t.integer :statusId
      t.string :password

      t.timestamps
    end
  end
end
