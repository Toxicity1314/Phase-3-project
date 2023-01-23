class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/restaurants" do
    restaurants = Restaurant.all
    restaurants.to_json
  end

end
