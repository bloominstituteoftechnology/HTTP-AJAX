import React, { Component } from "react";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleInput() {

  }

  render() {
    return (
      <Form className="form-container">
      <Label>Add yourself to the list!</Label>
        <FormGroup>
          <Input onChange={this.handleInput} type="text" placeholder="Enter your name...">Some plain text/ static value</Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="text" 
            placeholder="Enter your age..."
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            placeholder="Enter your email..."
          />
          
        </FormGroup>
        <Button> Submit </Button>
      </Form>
    );
  }
}

export default FriendForm;
