import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import AddFoodForm from "./AddFoodForm";

function MenuCard({ menu, addFood }) {

  const [addingFood, setAddingFood] = useState(false)

  const handleAddFood = () => {
    setAddingFood(!addingFood)
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header as={NavLink} to={`/menu/${menu.id}`}>
          {menu.time_of_day}
        </Card.Header>
        {addingFood && <AddFoodForm addFood={addFood} menu={menu} setAddingFood={setAddingFood}/>}
        <Button onClick={handleAddFood}>{addingFood ? "Cancel" : "Add New Food"}</Button>
      </Card.Content>
    </Card>
  );
}

export default MenuCard;
