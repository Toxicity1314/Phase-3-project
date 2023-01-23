class Restaurant < ActiveRecord::Base
    has_many Menus
end