// Reference: https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/
// Utilized code template from this setup guide, all credit to geeksforgeeks.com (allows use of tutorial/setup code with citation)

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PersonTableRow from "./PersonTableRow";

const PersonList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/bsg_people/")
            .then(({ data }) => {
                setPeople(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return people.map((res, i) => {
            return <PersonTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>homeworld</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default PersonList;