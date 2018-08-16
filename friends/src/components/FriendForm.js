import React, { Component } from "react";
import axios from "axios";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Col,
  Row
} from "reactstrap";

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addFriend = event => {
    //event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => response.data)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.addFriend} className="form-container">
          <Label className="form-label">Add yourself to the list!</Label>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Input
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Enter your name..."
                  name="name"
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input
                  onChange={this.handleInput}
                  name="age"
                  type="number"
                  placeholder="Enter your age..."
                />
              </FormGroup>
            </Col>

            <Col xs="4">
              <FormGroup>
                <Input
                  onChange={this.handleInput}
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                />
              </FormGroup>
            </Col>
          </Row>
          <Button> Submit </Button>
        </Form>
      </Container>
    );
  }
}

export default FriendForm;
