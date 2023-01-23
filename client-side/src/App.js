import React, { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import './App.css';

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
          exact path='/'
          element={<Home/>}
        />
      </Routes>
    </div>
  );
}

export default App;
