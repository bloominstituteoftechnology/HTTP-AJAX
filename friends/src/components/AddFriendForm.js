import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class AddFriendForm extends Component {
  constructor() {
    super();
    this.state = {
      newFriend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  handleAddFriendInput = e => {
    let newFriendData = { [e.target.name]: e.target.value };
    this.setState({ newFriend: {...this.state.newFriend, ...newFriendData} })
  }

  handleSubmitAddFriend = e => {
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => {
        this.props.updateFriendsList(response.data);
        this.props.toggle();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{margin: '9px'}}>
      <Form>
        <FormGroup row>
          <Label sm={2}>Name</Label>
          <Col>
            <Input
              type="text"
              name="name"
              onChange={this.handleAddFriendInput}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Age</Label>
            <Col>
              <Input
                type="number"
                name="age"
                onChange={this.handleAddFriendInput}
              />
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Email</Label>
            <Col>
              <Input
                type="email"
                name="email"
                onChange={this.handleAddFriendInput}
              />
            </Col>
        </FormGroup>
    </Form>
    <Button color="primary" onClick={this.handleSubmitAddFriend}>Add New Friend</Button>
    </div>
    );
  }
}
export default AddFriendForm;
