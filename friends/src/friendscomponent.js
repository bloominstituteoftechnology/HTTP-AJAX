import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const axios = require("axios");


class Friends extends Component {
    constructor() {
    super();
    this.state = {
        friends: []
    }
}
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
          <Input type="name" name="name" id="exampleEmail" placeholder="your name here" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleage">Age</Label>
          <Input type="age" name="age" id="exampleage" placeholder="your age here" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleemail">Email</Label>
          <Input type="email" name="email" id="exampleemail" placeholder="your email here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
        </div>
    )}
}

export default Friends;
