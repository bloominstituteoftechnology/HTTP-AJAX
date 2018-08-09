import React from "react";
// import { Link, NavLink, Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import './FriendForm.css';

const FriendForm = props => {
    return (
        <div>
            <Form onSubmit={props.handleSubmit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input onChange={props.handleChange} value={props.name} name="name" type="text" placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <Label >Age</Label>
                    <Input  onChange={props.handleChange} value={props.age} name="age" type="text" placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <Label >Email</Label>
                    <Input onChange={props.handleChange} value={props.email} name="email" className="red" type="text" placeholder="..." />
                </FormGroup>
                <Button color="danger">Submit</Button>
            </Form>
        </div>
    );
}

export default FriendForm;
