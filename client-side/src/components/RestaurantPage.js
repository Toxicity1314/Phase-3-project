import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

function RestaurantPage( {foodItems, setfoodItems, setNavBarName}) {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants/${id}`)
      .then((r) => r.json())
      .then((menus) => setMenu(menus));
  }, []);

  const addFood = (newlyAddedFood) => {
    setfoodItems([...foodItems,newlyAddedFood])
  }

  const menuCards = menu.map((menu) => {
    return <MenuCard addFood={addFood} foodItems={foodItems} setfoodItems={setfoodItems} key={menu.id} menu={menu} />;
  });

  return (
    <div className="ui container center aligned">
      <br/>
      <p>Excellent choice! What time of day will you be dining?</p>
      <p>If you're the owner of this restaurant, feel free to add a new food item!</p>
      <p>If you aren't the owner, please ignore the add food button while our developers tirelessly work to implement user authentication.</p>
      <br/>
      {menuCards}
    </div>)
}

export default RestaurantPage;
