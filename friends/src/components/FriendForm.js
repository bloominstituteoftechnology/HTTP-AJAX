import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, FormGroup, Input } from "reactstrap";

const FriendForm = props => {
  return (
    <div className="friend-form">
        <Form onSubmit={props.onSubmit} inline>
            <FormGroup>
                <Input
                type="text"
                name="name"
                placeholder="Add friend's name..."
                onChange={props.onChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Input
                type="age"
                name="age"
                placeholder="Add friend's age..."
                onChange={props.onChange}
                required
                />
            </FormGroup>
            <FormGroup>
                <Input
                type="email"
                name="email"
                placeholder="Add friend's email..."
                onChange={props.onChange}
                required
                />
            </FormGroup>
            <Button>Add friend</Button>
        </Form>
    </div>
  );
};

export default FriendForm;
