import React, { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import MenuPage from './components/MenuPage';
import { Pagination } from 'semantic-ui-react';
import RestaurantPage from './components/RestaurantPage';

import './App.css';

function App() {
  const [foodItems, setfoodItems] = useState([]);
  const [NavBarName, setNavBarName] = useState("Restaurant App")

  function handleNavBar(name){
    console.log(name)
    setNavBarName(name)
  }

  return (
    <div className="App">
      <NavBar NavBarName={NavBarName}/>
      <Routes>
        <Route
          path="/restaurants/:id"
          element={<RestaurantPage  foodItems={foodItems} setfoodItems={setfoodItems}/>}
          />
        <Route
          path="/menu/:id"
          element={<MenuPage foodItems={foodItems} setfoodItems={setfoodItems}/>}
        />
        <Route 
          path="/"
          element={<Home handleNavBar={handleNavBar}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
