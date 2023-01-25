require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  @page = 0
  
  # Add your routes here
  get "/restaurants/range/:number/:sort" do
    number = params[:number].to_i - 1
    sort = params[:sort] == "ASC" ? "ASC" : "DESC" 
    restaurants = params[:sort] == "none" ? Restaurant.offset(number*10).limit(10) :
      Restaurant.order("name #{sort}").offset(number*10).limit(10)
    restaurants.to_json
  end

  get "/restaurants/:id" do
    restaurant = Restaurant.find(params[:id])
    restaurant.menus.to_json
  end

  get "/menu/:id" do
    menu = Menu.find(params[:id])
    menu.food_items.to_json
  end

  patch '/food/:id' do
    food = FoodItem.find(params[:id])
    food.update(
      name: params[:name],
      description: params[:description],
      price: params[:price]
    )
    food.to_json
  end

  delete '/food/:id' do
    food = FoodItem.find(params[:id])
    food.destroy
    food.to_json
  end

  post '/food' do
    food = FoodItem.create(
      name: params[:name],
      description: params[:description],
      price: params[:price],
      food_course: params[:food_course],
      menu_id: params[:menu_id]
    )
    food.to_json
  end

end
