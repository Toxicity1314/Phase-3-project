import React, { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import MenuPage from './components/MenuPage';
import RestaurantPage from './components/RestaurantPage';

import './App.css';

function App() {
  const [foodItems, setfoodItems] = useState([]);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
          exact path='/'
          element={<Home/>}
        />
        <Route
          path="/restaurants/:id"
          element={<RestaurantPage foodItems={foodItems} setfoodItems={setfoodItems}/>}
          />
        <Route
          path="/menu/:id"
          element={<MenuPage foodItems={foodItems} setfoodItems={setfoodItems}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
