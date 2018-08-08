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
                    <Input type="text" placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <Label >Age</Label>
                    <Input type="text"placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <Label >Email</Label>
                    <Input className="red" type="text"placeholder="..." />
                </FormGroup>
                <Button color="danger">Submit</Button>
            </Form>
        </div>
    );
}

export default FriendForm;
