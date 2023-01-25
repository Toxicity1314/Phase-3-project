import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import { fetchHandler } from "../fetch";
import { Card } from 'semantic-ui-react'

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
      <br/>
      <p>Hope you're hungry! Here are the items offered at this time of day.</p>
      <h2>Apps</h2>
      <br/>
      <Card.Group className="ui container center aligned">{apps}</Card.Group>
      <div class="ui section divider"></div>
      <h2>Entrees</h2>
      <Card.Group className="ui container center aligned">{entrees}</Card.Group>
      <div class="ui section divider"></div>
      <h2>Desserts</h2>
      <Card.Group className="ui container center aligned">{desserts}</Card.Group>
      <div class="ui section divider"></div>
    </div>
  );
}

export default MenuPage;
