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

  return <div>{menuCards}</div>;
}

export default RestaurantPage;
