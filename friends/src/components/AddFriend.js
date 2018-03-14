import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddFriend extends Component {
  constructor() {
    super()
    this.state = {
      newName: '',
      newAge: '',
      newEmail: ''
    }
    
  }
  updateName = (event) => {
    this.setState({ newName: event.target.value })
    console.log(this.state);
  }
  updateAge = (event) => {
    
    this.setState({ newAge: Number(event.target.value) })
    console.log(this.state);
  }
  updateEmail = (event) => {
    this.setState({ newEmail: event.target.value })
    console.log(this.state);
  }


  addFriend = (event) => {
    
    event.preventDefault();
    
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    }
    
    axios.post("http://localhost:5000/friends", newFriend)
    .then(response => {
      this.setState({
        newName: '',
        newAge: '',
        newEmail: '',
      })
      // this.getData();
      console.log(response, 'post');
    })
    .catch(error => {
      console.log(error);
    });

    
    console.log('submitted');

    

    // axios({
    //   method: 'post',
    //   url: "http://localhost:5000/friends",
    //   data: newFriend
    // });

    
  }
  render() {
    return(
      <Form onSubmit={this.addFriend} >
        <Input required type="text" placeholder="Enter name" onChange={this.updateName} value={this.state.newName}/>
      
        <Input required type="number" placeholder="Enter Age" onChange={this.updateAge} value={this.state.newAge}/>
      
        <Input required type="text" placeholder="Enter Email" onChange={this.updateEmail} value={this.state.newEmail}/>
        <Button>Add Friend</Button>
      </Form>
    )
  }
}