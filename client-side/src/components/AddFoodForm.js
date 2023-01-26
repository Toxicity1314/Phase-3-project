import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { updateHandler } from "../fetch";

function AddFoodForm({ menu, setAddingFood, addFood }) {
  const [addFoodForm, setAddFoodForm] = useState({
    name: "",
    description: "",
    price: 0,
    food_course: "",
    menu_id: menu.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHandler("food", addFood, "POST", addFoodForm, setAddingFood);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "price") {
      value = parseFloat(value);
    }
    setAddFoodForm({ ...addFoodForm, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Food Name</label>
        <input name="name" onChange={handleChange} value={addFoodForm.name} />
      </Form.Field>
      <Form.TextArea
        name="description"
        label="Description"
        value={addFoodForm.description}
        onChange={handleChange}
      />
      <label>Choose a course</label>
      <select name="food_course" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="appetizer">appetizer</option>
        <option value="entree">entree</option>
        <option value="dessert">dessert</option>
      </select>
      <Form.Field>
        <label>Price</label>
        <input name="price" onChange={handleChange} value={addFoodForm.price} />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddFoodForm;
