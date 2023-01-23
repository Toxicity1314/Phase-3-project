import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { NavLink, Link } from "react-router-dom";
import EditFood from './EditFood'

function FoodCard( { food, updateFoodItems }) {
    
    const [isEditable, setIsEditable] = useState(false)

    const editFood = () => {
        setIsEditable(!isEditable)
    }

    return (
    <Card>
        <Card.Content>
            {isEditable ? 
            
            <EditFood food={food} updateFoodItems={updateFoodItems} setIsEditable={setIsEditable}/>
            : 
            <><Card.Header >{food.name}</Card.Header>
            <Card.Meta>
                <span className='desc'>{food.description}</span>
            </Card.Meta>
            <Card.Content extra>
                <p>Price: ${food.price}</p>
            </Card.Content></>
            }
            <Button onClick={editFood}>{isEditable ? "Cancel" : "Edit Food"}</Button>
        </Card.Content>
    </Card>
    )
}

export default FoodCard