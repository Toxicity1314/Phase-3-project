import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FoodCard from './FoodCard'

function MenuPage() {
    const {id} = useParams()
    const [foodItems, setfoodItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/menu/${id}`)
        .then(r => r.json())
        .then(food => setfoodItems(food))
    }, [])

    const foodCards = foodItems.map(food => {
        return (<FoodCard key={food.id} food={food}/>)
     })
    
    return (
        <div>
           {foodCards}
        </div>
    )
}

export default MenuPage
