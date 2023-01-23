class CreateFoodItems < ActiveRecord::Migration[6.1]
  def change
    create_table :food_items do |t|
      t.string :name
      t.float :price
      t.string :description
      t.integer :menu_id
    end
  end
end
