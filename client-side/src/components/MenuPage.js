import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";

function MenuPage() {
  const { id } = useParams();
  const [foodItems, setfoodItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/menu/${id}`)
      .then((r) => r.json())
      .then((food) => setfoodItems(food));
  }, []);

  const updateFoodItems = (updatedFood) => {
    const updatedFoods = foodItems.map((food) => {
      if (food.id === updatedFood.id) {
        return updatedFood;
      } else return food;
    });
    setfoodItems(updatedFoods);
  };

  const apps = [];
  const entrees = [];
  const desserts = [];

  const foodCards = foodItems.forEach((food) => {
    if (food.food_course == "appetizer") {
      apps.push(
        <FoodCard updateFoodItems={updateFoodItems} key={food.id} food={food} />
      );
    } else if (food.food_course == "entree") {
      entrees.push(
        <FoodCard updateFoodItems={updateFoodItems} key={food.id} food={food} />
      );
    } else {
      desserts.push(
        <FoodCard updateFoodItems={updateFoodItems} key={food.id} food={food} />
      );
    }
  });

  return (
    <div className="apps">
      <div>Apps</div>
      {apps}
      <div>Entrees</div>
      {entrees}
      <div>Desserts</div>
      {desserts}
    </div>
  );
}

export default MenuPage;
