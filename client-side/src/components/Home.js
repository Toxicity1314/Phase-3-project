import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'

function Home() {
    
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/restaurants')
        .then(r => r.json())
        .then(restaurantList => {
            setRestaurants(restaurantList)
        })
    }, [])

    const restaurantCards = restaurants.map(restaurant => {
        <RestaurantCard restaurant={restaurant}/>
    })

    console.log(restaurantCards)
    
    return (
        <div>
            {restaurantCards}
        </div>
    )
}

export default Home
