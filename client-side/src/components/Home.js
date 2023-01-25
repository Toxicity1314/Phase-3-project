import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

function Home({handleNavBar}) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((r) => r.json())
      .then((restaurantList) => {
        setRestaurants(restaurantList);
        handleNavBar("Restaurant App")
      });
  }, []);

  const restaurantCards = restaurants.map((restaurant) => {
    return <RestaurantCard handleNavBar={handleNavBar} key={restaurant.id} restaurant={restaurant} />;
  });

  console.log(restaurantCards);

  return (
    <div className="ui container center aligned">
      <br/>
      <p>Please select where you will be dining to view menus.</p>
      <br/>
      {restaurantCards}
    </div>)
}

export default Home;
