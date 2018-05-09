import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const axios = require("axios");


class Friends extends Component {
    constructor() {
    super();
    this.state = {
        name: '',
        age: '',
        email: '',
        friends: []
    }
}
handleFormType = event => {
    this.setState({ [event.target.name]: event.target.value });
};

handleFormSubmit = () => {
    let friends = this.state.friends;
    let friend = { 
        name: this.state.name, 
        age: this.state.age,
        email: this.state.email,
        id: this.state.friends.length + 1};
    friends.push(friend);
    this.setState({ friends: friends, friend: "" });
};

componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data }))
}

  render() {
    return (
        <div>
        {this.state.friends.map((friendobj) => {
            return(
                <div>
                    {friendobj.id}{friendobj.name}{friendobj.age}{friendobj.email}
                </div>
            )
        })}
        <h3>Form</h3>
        <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input name="name" onChange={ this.handleFormType } id="exampleEmail" placeholder="your name here" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleage">Age</Label>
          <Input name="age" onChange={ this.handleFormType } id="exampleage" placeholder="your age here" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleemail">Email</Label>
          <Input name="email" onChange={ this.handleFormType } id="exampleemail" placeholder="your email here" />
        </FormGroup>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Form>
        </div>
    )}
}

export default Friends;
