import React from "react";
import { Card } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

function RestaurantCard({ restaurant, handleNavBar }) {
  return (
    <Card className="ui container center aligned">
      <Card.Content>
        <Card.Header
          as={NavLink}
          to={`/restaurants/${restaurant.id}`}
          onClick={() => handleNavBar(restaurant.name)}
        >
          {restaurant.name}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}

export default RestaurantCard;
