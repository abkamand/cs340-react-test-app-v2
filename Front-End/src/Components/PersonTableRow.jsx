// Reference: https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/
// Utilized code template from this setup guide, all credit to geeksforgeeks.com (allows use of tutorial/setup code with citation)

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const PersonTableRow = (props) => {
    const { _id, fname, lname, homeworld, age } = props.obj;

    const deletePerson = () => {
        axios
            .delete(
                "http://localhost:4000/bsg_people/delete-person/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Person successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    return (
        <tr>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{homeworld}</td>
            <td>{age}</td>
            <td>
                <Link className="edit-link"
                    to={"/edit-person/" + _id}>
                    Edit
                </Link>
                <Button onClick={deletePerson}
                    size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default PersonTableRow;