require 'pry'
puts "🌱 Seeding spices..."
Restaurant.destroy_all
Menu.destroy_all
FoodItem.destroy_all

@breakfast = Menu.create(time_of_day: "breakfast")
@lunch = Menu.create(time_of_day: "lunch")
@dinner = Menu.create(time_of_day: "dinner")
5.times do
    @restaurant =Restaurant.create(name: Faker::Restaurant.name)

    20.times do
        array = [@breakfast, @lunch, @dinner]
        name = Faker::Food.dish
        description = Faker::Food.description
        price = rand(1..100)
        menu = array[rand(array.length)] 
        food_course_array = ['appetizer','entree','dessert']
        food_course = food_course_array[rand(food_course_array.length)]
        
        FoodItem.create(name: name ,price: price , description: description , menu: menu, food_course: food_course, restaurant: @restaurant)
    end
end

# sedona = Restaurant.create(name: "Sedona Taphouse")
# breakfast = Menu.create(time_of_day: "breakfast", restaurant: sedona)
# lunch = Menu.create(time_of_day: "lunch", restaurant: sedona)
# dinner = Menu.create(time_of_day: "dinner", restaurant: sedona)
# FoodItem.create(name: "House Made Soup" ,price: 4.9 , description: "Tomato Basil New Endland Clam Chowder" , menu: lunch, food_course: "appetizer")
# FoodItem.create(name: "Hummus Duo" ,price: 9.9 , description: "Classic and red pepper hummas with feta, cucumbers and flatbread" , menu: lunch, food_course: "appetizer")
# FoodItem.create(name: "Southwest Steak Taco" ,price: 13 , description: "Seasoned tender steak, black bean salsa, sauteed onions, chipotle aoili, cheddar chees, fresh pico, cilantro. with greens" , menu: lunch, food_course: "entree")
# FoodItem.create(name: "Grilled Chicken" ,price: 20.9 , description: "8oz Side of BBQ Choice of two house made sides" , menu: lunch, food_course: "entree")
# FoodItem.create(name: "Strawberry Cheesecake" ,price: 8 , description: "Strawberry Cheesecake...." , menu: lunch, food_course: "dessert")
# FoodItem.create(name: "Chocolate lava cake" ,price: 9 , description: "chocolate lava cake" , menu: lunch, food_course: "dessert")


# sedona = Restaurant.create(name: "Sedona Taphouse")

# FoodItem.create(name: "House Made Soup" ,price: 4.9 , description: "Tomato Basil New Endland Clam Chowder" , menu: lunch, food_course: "appetizer", restaurant: sedona)
# FoodItem.create(name: "Hummus Duo" ,price: 9.9 , description: "Classic and red pepper hummas with feta, cucumbers and flatbread" , menu: lunch, food_course: "appetizer", restaurant: sedona)
# FoodItem.create(name: "Southwest Steak Taco" ,price: 13 , description: "Seasoned tender steak, black bean salsa, sauteed onions, chipotle aoili, cheddar chees, fresh pico, cilantro. with greens" , menu: lunch, food_course: "entree", restaurant: sedona)
# FoodItem.create(name: "Grilled Chicken" ,price: 20.9 , description: "8oz Side of BBQ Choice of two house made sides" , menu: lunch, food_course: "entree", restaurant: sedona)
# FoodItem.create(name: "Strawberry Cheesecake" ,price: 8 , description: "Strawberry Cheesecake...." , menu: lunch, food_course: "dessert", restaurant: sedona)
# FoodItem.create(name: "Chocolate lava cake" ,price: 9 , description: "chocolate lava cake" , menu: lunch, food_course: "dessert", restaurant: sedona)
puts "✅ Done seeding!"
