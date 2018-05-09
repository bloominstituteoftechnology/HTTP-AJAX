import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SaveFriend extends React.Component {
  render() {
    return (
      <Form className="Friend-form">
        <FormGroup className="Friend-form-group">
          <Label for="exampleText">Name</Label>
          <Input type="text" name="name" id="name" placeholder="New friend's name" />
        </FormGroup>

        <FormGroup className="Friend-form-group">
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="friend@email.com" />
        </FormGroup>

        <FormGroup className="Friend-form-group">
          <Label for="exampleEmail">Age</Label>
          <Input type="number" name="age" id="age" placeholder="Your friend's age" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}