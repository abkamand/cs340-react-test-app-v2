// Reference: https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/
// Utilized code template from this setup guide, all credit to geeksforgeeks.com (allows use of tutorial/setup code with citation)


// CreatePerson Component for add new person

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PersonForm from "./PersonForm";

// Create Person Component
const CreatePerson = () => {
    const [formValues, setFormValues] =
        useState({ fname: '', lname: '', homeworld: '', age: '' })
    // onSubmit handler
    const onSubmit = personObject => {
        axios.post(
            'http://localhost:4000/bsg_people/create-person',
            personObject)
            .then(res => {
                if (res.status === 200)
                    alert('Person successfully created')
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return person form
    return (
        <PersonForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Person
        </PersonForm>
    )
}

// Export CreatePerson Component
export default CreatePerson;