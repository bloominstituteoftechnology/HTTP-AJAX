import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FriendList from './friendlist';
import './App.css';
import { Route, Link } from 'react-router-dom';


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

    axios.post('http://localhost:5000/friends', friend )
    .then(response => this.setState({ 
        friends: response.data, 
        name: '', 
        age: '', 
        email: '' 
    }))
    .catch(err => console.log(err))
}

updateFriend = id => {
    axios.post(`http://localhost:5000/friends/${id}`, { name: this.state.name, age: this.state.age, email: this.state.email })
      .then((data) => this.setState({
        friends: data.data,
        name: '',
        age: '',
        email: ''
      }))
      .catch(err => console.log(err));
  }

componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data }))
    .catch(err => console.log(err))
}

  render() {
    return (
        <div>
        {/* Links */}
        <Link to="/friendslist">Friends</Link>
        <Link to="/form">Form</Link>
        {/* Routes */}
        <Route path="/friendslist" render={() => <FriendList friends={ this.state.friends }/>}/> 
        <Route path="/form" render={() => <Form>
        {/* Form */}
        <FormGroup>
        <h3>Form</h3>  
          <Label for="exampleName">Name</Label>
          <Input name="name" onChange={ this.handleFormType } id="exampleEmail"  value={this.state.name} placeholder="your name here" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleage">Age</Label>
          <Input name="age" onChange={ this.handleFormType } id="exampleage" value={this.state.age} placeholder="your age here" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleemail">Email</Label>
          <Input name="email" onChange={ this.handleFormType } id="exampleemail" value={this.state.email} placeholder="your email here" />
        </FormGroup>
        <Button onClick={this.handleFormSubmit}>Submit</Button> 
        </Form>}/>
        </div> 
    )}
}

export default Friends;
