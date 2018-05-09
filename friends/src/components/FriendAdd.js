import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FriendAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
    };
  }

  handleFriendInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleAddFriend = () => {
    const newFriend = this.state

    this.setState({
      name: "",
      age: "",
      email: "",
    })
  }

  render() {
    return(
      <Form className="col-5 mt-5">
        <FormGroup>
          <Label for="friendName">Name</Label>
          <Input type="text" name="name" id="friendName" placeholder="New Name" value={this.state.name} onChange={this.handleFriendInput}/>
        </FormGroup>
        <FormGroup>
          <Label for="friendAge">Age</Label>
          <Input type="text" name="age" id="friendAge" placeholder="New Age" value={this.state.age} onChange={this.handleFriendInput}/>
        </FormGroup>
        <FormGroup>
          <Label for="friendEmail">Email</Label>
          <Input type="email" name="email" id="friendEmail" placeholder="New email" value={this.state.email} onChange={this.handleFriendInput}/>
        </FormGroup>
        <Button onClick={this.handleAddFriend}>Submit</Button>
      </Form>
    )
  }


}

export default FriendAdd;