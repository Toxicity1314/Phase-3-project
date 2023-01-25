import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Pagination, Form, Button } from "semantic-ui-react";
import { fetchHandler } from "../fetch";


function Home({handleNavBar}) {
  const { pageNumber } = useParams(0);
  
  const [restaurants, setRestaurants] = useState([]);
  const [activePage, setActivePage] = useState(1)
  const [sort, setSort] = useState("none")
  const [searchField, setSearchField] = useState("")

  const handlePaginationChange = (e, {activePage})=>{
    setActivePage(activePage)
  }
  useEffect(() => {    
    fetchHandler(`restaurants/range/${activePage}/${sort}`, setRestaurants)
  }, [activePage, sort]);

  const restaurantCards = restaurants.map((restaurant) => {
    return <RestaurantCard handleNavBar={handleNavBar} key={restaurant.id} restaurant={restaurant} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    setActivePage(1)
    fetchHandler(`restaurants/searchQuery/${searchField}/1/${sort}`, setRestaurants)
    setSearchField("")
  }

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    <div className="ui container center aligned">
      <br/>
      <p>Please select where you will be dining to view menus.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Search</label>
            <input name="search" onChange={handleChange} value={searchField} />
        </Form.Field>
        <Button type="submit">Search</Button>
      </Form>
      <br/>
      <br/>
      <label>Choose a sort: </label>
            <select name="food_course" onChange={(e)=> setSort(e.target.value)}>
                <option value="none">--Please choose a sort--</option>
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
