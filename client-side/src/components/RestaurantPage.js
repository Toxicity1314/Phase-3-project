import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

function RestaurantPage() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants/${id}`)
      .then((r) => r.json())
      .then((menus) => setMenu(menus));
  }, []);

  const menuCards = menu.map((menu) => {
    return <MenuCard key={menu.id} menu={menu} />;
  });

  return <div>{menuCards}</div>;
}

export default RestaurantPage;
