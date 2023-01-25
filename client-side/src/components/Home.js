import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { fetchHandler } from "../fetch";

function Home({handleNavBar}) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchHandler(`restaurants`, setRestaurants)
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
