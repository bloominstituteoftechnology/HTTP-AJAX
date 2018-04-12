import React, { Component } from 'react';
import axios from 'axios';
import App from '../App';
import Display from './Display';
import { Container, Row, Col, Button, Label, Input } from 'reactstrap';

class FriendApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleFormInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFriend = () => {
    const addFriend = { name: this.state.name, age: +this.state.age, email: this.state.email };
    axios.post('http://localhost:5000/friends', addFriend)
      .then(response => {
        console.log(response);
        <Display friend={response} />
      })
      .catch(err => {
        console.log(err);
      })
      this.setState({ name: "", email: "", age: "" });
  }

  render() {
    return (
      <Container className="col-6 Form">
        <Row className="Form--top">
          <Col className="col-9">
            <Label for="name" className="mr-sm-2 Form--label">Name</Label>
            <Input type="text" name="name" value={this.state.name} onChange={this.handleFormInput} placeholder="Name" />
          </Col>
          <Col>
            <Label for="age" className="mr-sm-2 Form--label">Age</Label>
            <Input type="number" name="age" value={this.state.age} onChange={this.handleFormInput} placeholder="Age" />
          </Col>
        </Row>
        <Row className="Form--bottom">
          <Col>
            <Label for="email" className="mr-sm-2 Form--label">Email</Label>
            <Input type="email" name="email" value={this.state.email} onChange={this.handleFormInput} placeholder="Email" />
          </Col>
        </Row>
        <Button className="Form--submit" onClick={this.handleFriend}>Add New Friend!</Button>
      </Container>
    )
  }
}

export default FriendApp;
