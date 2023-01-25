import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { updateHandler } from "../fetch";

function EditFood({ food, updateFoodItems, setIsEditable }) {
  const [editFoodForm, setEditFoodForm] = useState({
    name: food.name,
    description: food.description,
    price: food.price,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHandler(`food/${food.id}`, updateFoodItems, "PATCH", editFoodForm, setIsEditable)
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "price") {
      value = parseFloat(value);
    }
    setEditFoodForm({ ...editFoodForm, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Food Name</label>
        <input name="name" onChange={handleChange} value={editFoodForm.name} />
      </Form.Field>
      <Form.TextArea
        name="description"
        label="Description"
        value={editFoodForm.description}
        onChange={handleChange}
      />
      <Form.Field>
        <label>Price</label>
        <input
          name="price"
          onChange={handleChange}
          value={editFoodForm.price}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default EditFood;
