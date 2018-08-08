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
                    <Input onChange={props.handleName} type="text" placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <Label >Age</Label>
                    <Input  onChange={props.handleAge} type="text"placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <Label >Email</Label>
                    <Input onChange={props.handleEmail} className="red" type="text"placeholder="..." />
                </FormGroup>
                <Button color="danger">Submit</Button>
            </Form>
        </div>
    );
}

export default FriendForm;
