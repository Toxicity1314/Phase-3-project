class Restaurant < ActiveRecord::Base
    has_many :food_items
    has_many :menus, through: :food_items
end