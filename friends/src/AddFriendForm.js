import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
/* prettier-ignore */
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const StyledForm = styled(Form)`
  width: 300px;
  margin-left: 40%;
`;

export default class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
    };
    this.setState({ name: '', age: '', email: '' });
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => this.props.updateFriends(response.data))
      .catch(err => console.log('ERROR:', err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledForm>
        <FormGroup row>
          <Label for="Name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="enter name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Age" sm={2}>
            Age
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="enter age"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="enter email"
            />
          </Col>
        </FormGroup>
        <Button color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </StyledForm>
    );
  }
}
