import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

function EditFood( { food, updateFoodItems, setIsEditable }) {

    const [editFoodForm, setEditFoodForm] = useState(
        {
            name: food.name,
            description: food.description,
            price: food.price        
        }
    )

    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/food/${food.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(editFoodForm)
        })
        .then(r => r.json())
        .then(updatedFood => {
            updateFoodItems(updatedFood)
            setIsEditable(false)
        })
    }
    
    const handleChange = (e) => {
        let {name, value} = e.target
        if (name == "price") {
            value = parseFloat(value)
        }
        setEditFoodForm({...editFoodForm, [name]: value})
    }
    
    console.log(editFoodForm)
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
                <input name="price" onChange={handleChange} value={editFoodForm.price} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default EditFood
