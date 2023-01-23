import React from 'react'
import { Card } from 'semantic-ui-react'

function RestaurantCard( { restaurant }) {
    return (
    <Card>
        <Card.Content>
            <Card.Header>{restaurant.name}</Card.Header>
        </Card.Content>
    </Card>
    )
}

export default RestaurantCard
