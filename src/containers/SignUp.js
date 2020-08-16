import React, {useState} from "react"; // useState hook stores what user enters in the form
import "./Login.css";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import {Helmet} from "react-helmet";

export default function Login() {

    function handleSubmit(event) {
        // todo change behaviour, currently suppresses browser default behaviour
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Helmet>
                <title>{'Sign Up'}</title>
            </Helmet>
            <body>
            <h1>Sign Up</h1>
            <h2>Enter your desired username and password to create an account.</h2>
            </body>
            <br/>
            <Form>
                <FormGroup controlId="username">
                    <FormControl
                        type="username"
                        placeholder="username"
                        onFocus={e=>e.target.placeholder=""}
                        autofoucs
                    />
                    <br/>
                    <FormControl
                        type="password"
                        placeholder="password"
                        onFocus={e=>e.target.placeholder=""}
                    />
                    <br/>
                    <Button type="submit">
                        Submit
                    </Button>
                </FormGroup>
            </Form>
            <a href="/login">Login</a>
        </div>
    );
}