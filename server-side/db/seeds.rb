require 'pry'
puts "🌱 Seeding spices..."
Restaurant.destroy_all
Menu.destroy_all
FoodItem.destroy_all

5.times do
    restaurant =Restaurant.create(name: Faker::Restaurant.name)
    @breakfast = Menu.create(time_of_day: "breakfast", restaurant: restaurant)
    @lunch = Menu.create(time_of_day: "lunch", restaurant: restaurant)
    @dinner = Menu.create(time_of_day: "dinner", restaurant: restaurant)

    20.times do
        array = [@breakfast, @lunch, @dinner]
        name = Faker::Food.dish
        description = Faker::Food.description
        price = rand(1..100)
        menu = array[rand(array.length)] 
        food_course_array = ['appetizer','entree','dessert']
        food_course = food_course_array[rand(food_course_array.length)]
        
        FoodItem.create(name: name ,price: price , description: description , menu: menu, food_course: food_course)
    end
end







puts "✅ Done seeding!"
