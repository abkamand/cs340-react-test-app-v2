// Reference: https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/
// Utilized code template from this setup guide, all credit to geeksforgeeks.com (allows use of tutorial/setup code with citation)

// EditPerson Component for update Person data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./PersonForm";

// EditPerson Component
const EditPerson = (props) => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        rollno: "",
    });

    //onSubmit handler
    const onSubmit = (personObject) => {
        axios
            .put(
                "http://localhost:4000/bsg_people/update-person/" +
                props.match.params.id,
                personObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Person successfully updated");
                    props.history.push("/person-list");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    // Load data from server and reinitialize person form
    useEffect(() => {
        axios
            .get(
                "http://localhost:4000/bsg_people/update-person/"
                + props.match.params.id
            )
            .then((res) => {
                const { fname, lname, homeworld, age } = res.data;
                setFormValues({ fname, lname, homeworld, age });
            })
            .catch((err) => console.log(err));
    }, [props.match.params.id]);

    // Return person form
    return (
        <PersonForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Update Person
        </PersonForm>
    );
};

// Export EditPerson Component
export default EditPerson;