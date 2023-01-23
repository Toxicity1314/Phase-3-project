class Menu < ActiveRecord::Base 
    belongs_to :restaurant
    # belongs_to :food_item
    has_many :food_items
end