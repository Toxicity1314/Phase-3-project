import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import { fetchHandler } from "../fetch";

function MenuPage({foodItems, setfoodItems}) {
  const { id } = useParams();
  

  useEffect(() => {
    fetchHandler(`menu/${id}`, setfoodItems)
  }, []);

  const updateFoodItems = (updatedFood) => {
    const updatedFoods = foodItems.map((food) => {
      if (food.id === updatedFood.id) {
        return updatedFood;
      } else return food;
    });
    setfoodItems(updatedFoods);
  };

  const removeFood = (deletedFood) => {
    const filteredFoods = foodItems.filter((food) => {
      if (food.id !== deletedFood.id) {
        return food
      }
    })
    setfoodItems(filteredFoods)
  }

  const apps = [];
  const entrees = [];
  const desserts = [];

  const sortFoodsByCourse = () => {
    let arrayToUpdate

    const foodCards = foodItems.forEach((food) => {
      if (food.food_course == "appetizer") {
        arrayToUpdate = apps
      } else if (food.food_course == "entree") {
        arrayToUpdate = entrees
      } else {
        arrayToUpdate = desserts
      }
      arrayToUpdate.push(<FoodCard updateFoodItems={updateFoodItems} removeFood={removeFood} key={food.id} food={food} />)
    }) 
  }

  sortFoodsByCourse()

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
