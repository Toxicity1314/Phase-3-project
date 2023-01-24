import React, { useState } from 'react'
import { Button, Form } from "semantic-ui-react";

function AddFoodForm( { menu, setAddingFood, addFood } ) {
    
    const [addFoodForm, setAddFoodForm] = useState({
        name: "",
        description: "",
        price: 0,
        food_course: "",
        menu_id: menu.id
      });


      const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/food`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addFoodForm),
        })
        .then((r) => r.json())
        .then((newlyAddedFood) => {
            addFood(newlyAddedFood);
            setAddingFood(false);
        });
      }

      const handleChange = (e) => {
        console.log(e.target.value)
        let { name, value } = e.target;
        if (name == "price") {
            value = parseFloat(value);
        }
        setAddFoodForm({ ...addFoodForm, [name]: value });
      }
      console.log(addFoodForm)

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
                <input
                name="price"
                onChange={handleChange}
                value={addFoodForm.price}
                />
            </Form.Field>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default AddFoodForm
