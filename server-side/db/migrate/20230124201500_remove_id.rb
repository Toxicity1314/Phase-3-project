class RemoveId < ActiveRecord::Migration[6.1]
  def change
    remove_column(:menus, :restaurant_id)
  end
end
