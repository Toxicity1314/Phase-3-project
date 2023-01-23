import React from "react";
import { Card } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header as={NavLink} to={`/restaurants/${restaurant.id}`}>
          {restaurant.name}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}

export default RestaurantCard;
