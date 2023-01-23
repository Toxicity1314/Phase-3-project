import React from 'react'
import { Card } from 'semantic-ui-react'
import { NavLink, Link } from "react-router-dom";

function FoodCard( { food }) {
 
    return (
    <Card>
        <Card.Content>
            <Card.Header >{food.name}</Card.Header>
        </Card.Content>
    </Card>
    )
}

export default FoodCard