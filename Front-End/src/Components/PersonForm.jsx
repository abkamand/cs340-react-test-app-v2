// Reference: https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/
// Utilized code template from this setup guide, all credit to geeksforgeeks.com (allows use of tutorial/setup code with citation)

import React from "react";
import * as Yup from "yup"; // used  for data validation 
import { Formik, Form, Field, ErrorMessage } from "formik"; // custom library for react form building
import { FormGroup, FormControl, Button } from "react-bootstrap";

const PersonForm = (props) => {
    const validationSchema = Yup.object().shape({
        // create form validation utilizing Yup
        fname: Yup.string().required("Required"), // bsg_people.fname form validation
        lname: Yup.string().required("Required"), // bsg_people.lname form validation
        homeworld: Yup.number().required("Required"), // bsg_people.homeworld form validation
        age: Yup.number().required("Required"), // bsg_people.homeworld form validation
    });
    console.log(props);

    // create forms utilizing Formik
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label htmlFor="fname">fname:</label>
                        <Field name="fname" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="fname"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="lname">lname:</label>
                        <Field name="lname" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="lname"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="homeworld">homeworld:</label>
                        <Field name="homeworld" type="number"
                            className="form-control" />
                        <ErrorMessage
                            name="homeworld"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="age">age:</label>
                        <Field name="age" type="number"
                            className="form-control" />
                        <ErrorMessage
                            name="age"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default PersonForm;