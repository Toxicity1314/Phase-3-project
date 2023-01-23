class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/restaurants" do
    restaurants = Restaurant.all
    restaurants.to_json
  end

  get "/restaurants/:id" do
    restaurant = Restaurant.find(params[:id])
    restaurant.menus.to_json
    # restaurant.to_json(include: {menus: {include: {food_items:{}}}})
  end

  get "/menu/:id" do
    menu = Menu.find(params[:id])
    menu.food_items.to_json
  end

end
