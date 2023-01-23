class Menu < ActiveRecord::Base 
    belongs_to :restaurant
    has_many :food_items
end