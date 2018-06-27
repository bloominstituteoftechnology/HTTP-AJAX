import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import FriendList from './components/FriendList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(friendsData => this.setState({ friends: friendsData.data}))
    .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendList friendList = {this.state.friends}/>
        <Form>
          <FormGroup>
            <Label for="name" >Name</Label>
            <Input type="text" name="name" placeholder="...enter name" isRequired></Input> 
          </FormGroup>
          <FormGroup>
            <Label for="age" >Age</Label>
            <Input type="number" name="age" placeholder="...enter age" isRequired></Input> 
          </FormGroup>
          <FormGroup>
            <Label for="email" >Email</Label>
            <Input type="email" name="email" placeholder="...enter email" isRequired></Input> 
          </FormGroup>
          <Button>Add Friend</Button>
        </Form>
      </div>
    );
  }
}

export default App;
