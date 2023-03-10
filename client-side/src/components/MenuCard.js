import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AddFoodForm from "./AddFoodForm";

function MenuCard({ menu, addFood }) {
  const [addingFood, setAddingFood] = useState(false);

  const handleAddFood = () => {
    setAddingFood(!addingFood);
  };

  return (
    <Card className="ui container center aligned">
      <Card.Content>
        <Card.Header as={NavLink} to={`/menu/${menu.id}`}>
          {menu.time_of_day}
        </Card.Header>
        <br />
        {addingFood && (
          <AddFoodForm
            addFood={addFood}
            menu={menu}
            setAddingFood={setAddingFood}
          />
        )}
        <Button onClick={handleAddFood}>
          {addingFood ? "Cancel" : "Add New Food"}
        </Button>
      </Card.Content>
    </Card>
  );
}

export default MenuCard;
