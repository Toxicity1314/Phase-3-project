import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import EditFood from "./EditFood";
import { fetchHandler } from "../fetch";

function FoodCard({ food, updateFoodItems, removeFood }) {
  const [isEditable, setIsEditable] = useState(false);

  const editFood = () => {
    setIsEditable(!isEditable);
  };

  const handleDelete = () => {
    fetchHandler(`food/${food.id}`, removeFood, "DELETE")
  }

  return (
    <Card>
      <Card.Content>
        {isEditable ? (
          <EditFood
            food={food}
            updateFoodItems={updateFoodItems}
            setIsEditable={setIsEditable}
          />
        ) : (
          <>
            <Card.Header>{food.name}</Card.Header>
            <Card.Meta>
              <span className="desc">{food.description}</span>
            </Card.Meta>
            <Card.Content extra>
              <p>Price: ${food.price}</p>
            </Card.Content>
          </>
        )}
        <Button onClick={editFood}>
          {isEditable ? "Cancel" : "Edit Food"}
        </Button>
        {!isEditable && <Button onClick={handleDelete} >Delete</Button>}
      </Card.Content>
    </Card>
  );
}

export default FoodCard;
