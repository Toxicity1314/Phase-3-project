require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/restaurants/range/:number/:sort" do
    hash = {restaurantCount: Restaurant.count, restaurants:[] }
    number = params[:number].to_i - 1
    sort = params[:sort]
    hash[:restaurants] = params[:sort] == "none" ? Restaurant.offset(number*10).limit(10) :
      Restaurant.order("name #{sort}").offset(number*10).limit(10)
    hash.to_json
  end

  get '/restaurants/range/:number/:sort/:searchField' do
    hash = {restaurantCount: 0 ,restaurants:[] }
    sort = params[:sort]
    number = params[:number].to_i - 1
    searchTerm = params[:searchField]
    hash[:restaurantCount] = Restaurant.where("name like ?", "%#{searchTerm}%").count
    hash[:restaurants] = params[:sort] == "none" ? Restaurant.where("name like ?", "%#{searchTerm}%" ).offset(number*10).limit(10) :
      Restaurant.where("name like ?", "%#{searchTerm}%" ).order("name #{sort}").offset(number*10).limit(10)
    
    hash.to_json()
  end

  get "/restaurants/:id" do
    Restaurant.find(params[:id]).menus.to_json
  end

  get "/menu/:id" do
    Menu.find(params[:id]).food_items.to_json
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
