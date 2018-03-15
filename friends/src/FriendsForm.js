import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class FriendsForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    })
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  addFriend = (event) => {
    event.preventDefault();
    
    const { name, age, email } = this.state;
    axios.post('http://localhost:5000/friends', {
      name: name,
      age: age,
      email: email
    })
    .then((response) => {
      this.setState({
        name: '',
        age: '',
        email: '',
      })
    })
    .catch((error) => {
      console.error('Server Error', error)
    })
  }

  render() {
    return (
      <Form className="form" onSubmit={ this.addFriend }>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" id="name" value={ this.state.name } onChange={ this.handleNameChange } placeholder="Enter your name"/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" id="age" value={ this.state.age } onChange={ this.handleAgeChange } placeholder="Enter your age"/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" id="email" value={ this.state.email } onChange={ this.handleEmailChange } placeholder="Enter your email"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data }) 
      console.log(this.state.friends)
    })
    .catch(error => { console.error('Server Error', error) })
  }
}

export default FriendsForm;