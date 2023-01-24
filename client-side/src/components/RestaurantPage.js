import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

function RestaurantPage() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [foodItems, setfoodItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants/${id}`)
      .then((r) => r.json())
      .then((menus) => setMenu(menus));
  }, []);

  const addFood = (newlyAddedFood) => {
    const updatedFoods = foodItems.push(newlyAddedFood)
    setfoodItems(updatedFoods)
  }

  const menuCards = menu.map((menu) => {
    return <MenuCard addFood={addFood} foodItems={foodItems} setfoodItems={setfoodItems} key={menu.id} menu={menu} />;
  });

  return <div>{menuCards}</div>;
}

export default RestaurantPage;
