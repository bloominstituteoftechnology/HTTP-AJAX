import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class FriendsForm extends Component {
  state = {
    friends: []
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" id="name" placeholder="Enter your name"/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" id="age" placeholder="Enter your age"/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default FriendsForm;