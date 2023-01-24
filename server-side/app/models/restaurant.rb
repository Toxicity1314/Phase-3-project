class Restaurant < ActiveRecord::Base
    has_many :menus
    has_many :food_items, through: :menus
end