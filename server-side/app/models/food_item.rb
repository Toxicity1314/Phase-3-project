class FoodItem < ActiveRecord::Base 
    belongs_to :menu
    belongs_to :restaurant
end