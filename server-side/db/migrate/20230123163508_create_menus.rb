class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :time_of_day
      t.integer :restaurant_id
    end
  end
end
