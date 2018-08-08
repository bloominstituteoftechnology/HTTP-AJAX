import React from "react";
// import { Link, NavLink, Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './FriendForm.css';

const FriendForm = props => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button color="danger">Submit</Button>
            </Form>
        </div>
    );
}

export default FriendForm;
