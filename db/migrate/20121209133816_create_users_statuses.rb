class CreateUsersStatuses < ActiveRecord::Migration
  def change
    create_table :users_statuses do |t|
      t.string :name

      t.timestamps
    end
  end
end
