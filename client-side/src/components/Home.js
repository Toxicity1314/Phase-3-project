import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Pagination } from "semantic-ui-react";
import { fetchHandler } from "../fetch";


function Home({handleNavBar}) {
  const { pageNumber } = useParams(0);
  console.log(pageNumber)
  
  const [restaurants, setRestaurants] = useState([]);
  const [activePage, setActivePage] = useState(1)
  const [sort, setSort] = useState("none")

  const handlePaginationChange = (e, {activePage})=>{
    setActivePage(activePage)
  }
  useEffect(() => {    
    fetchHandler(`restaurants/range/${activePage}/${sort}`, setRestaurants)
  }, [activePage, sort]);

  const restaurantCards = restaurants.map((restaurant) => {
    return <RestaurantCard handleNavBar={handleNavBar} key={restaurant.id} restaurant={restaurant} />;
  });

  console.log(restaurantCards);

  return (
    <div className="ui container center aligned">
      <br/>
      <p>Please select where you will be dining to view menus.</p>
      <label>Choose a sort</label>
            <select name="food_course" onChange={(e)=> setSort(e.target.value)}>
                <option value="none">--Please choose a sort: </option>
                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
            </select>
      <br/>
      <br/>
      <br/>
      {restaurantCards}
      <Pagination
        activePage={activePage}
        onPageChange={handlePaginationChange}
        totalPages={10}
      />
    </div>)
}

export default Home;
