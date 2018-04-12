import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FriendApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="col-7 Form">
        <Row className="Form--top">
          <Col className="col-9">
            <Label for="name" className="mr-sm-2 formLabel">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Name" />
          </Col>
          <Col>
            <Label for="age" className="mr-sm-2 formLabel">Age</Label>
            <Input type="number" name="age" id="age" placeholder="Age" />
          </Col>
        </Row>
        <Row className="Form--bottom">
          <Col>
            <Label for="email" className="mr-sm-2 formLabel">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </Col>
        </Row>
        <Button className="Form--submit">Add New Friend!</Button>
      </Container>
    )
  }
}

export default FriendApp;
