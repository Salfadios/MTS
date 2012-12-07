class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fio
      t.string :login
      t.integer :status_id
      t.string :password
      t.string :last_login_date

      t.timestamps
    end
  end
end
