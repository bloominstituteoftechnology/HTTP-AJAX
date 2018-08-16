import React, { Component } from "react";

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
    this.state = {};
  }
  handleInput() {}

  render() {
    return (
      <Container>
        <Form className="form-container">
          <Label className="form-label">Add yourself to the list!</Label>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Input
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Enter your name..."
                />
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input type="text" placeholder="Enter your age..." />
              </FormGroup>
            </Col>

            <Col xs="4">
              <FormGroup>
                <Input type="text" placeholder="Enter your email..." />
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
