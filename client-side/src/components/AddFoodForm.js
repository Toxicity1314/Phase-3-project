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

      const options = [
        {key: 'a', text: 'appetizer', value: 'appetizer'},
        {key: 'e', text: 'entree', value: 'entree'},
        {key: 'd', text: 'dessert', value: 'dessert'}
      ]

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
        let { name, value } = e.target;
        if (name == "price") {
            value = parseFloat(value);
        }
        if (e.target.className === "item") {
            name = "food_course"
            value = e.target.textContent
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
            <Form.Select
                fluid
                label='Course'
                name='course'
                options={options}
                placeholder='Course'
                onChange={handleChange}
            />
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
