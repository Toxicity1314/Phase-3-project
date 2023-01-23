import React from "react";
import { Card } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

function MenuCard({ menu }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header as={NavLink} to={`/menu/${menu.id}`}>
          {menu.time_of_day}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}

export default MenuCard;
