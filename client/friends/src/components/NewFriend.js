import React, { Component } from 'react';
import './NewFriend.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';


class NewFriend extends Component {
  state = {
    name: "",
    age: "",
    email: ""
    };

  updateInputValue = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    
  onSubmit = (event) => {
    event.preventDefault();
    
    axios
    .post('http://localhost:5000/friends', {
       name: this.state.name,
       age: this.state.age,
       email: this.state.email
    })
     .then(response => {
      this.props.updateFunc({
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }); 
      this.setState({
        name: "",
        age: "",
        email: ""
      });
      
       
     })
     .catch(error => {
       console.log(`There was an error adding a new friend: ${error}`);
     });

     
  };
  
  render() {
    return (
      <div className="newFriendContainer">
        
        <Form id="newFriendForm" >
          <h3 className="newFriendTitle">Add New Friend</h3>
          <FormGroup className="formGroup">
          <Label for="name">Name</Label>
          <Input type="text" name="name" value={this.state.name} onChange={event => this.updateInputValue(event)}  placeholder="New Friend Name" />
          </FormGroup>
          <FormGroup className="formGroup">
          <Label for="age">Age</Label>
          <Input type="number" name="age" value={this.state.age} onChange={event => this.updateInputValue(event)}  placeholder="New Friend Age" />
          </FormGroup>
          <FormGroup className="formGroup">
          <Label for="email">Email</Label>
          <Input type="email" name="email" value={this.state.email} onChange={event => this.updateInputValue(event)}  placeholder="New Friend Email" />
          </FormGroup>
          <Button onClick={event => this.onSubmit(event)}>Add New Friend</Button>
        </Form>
        
      </div>
    );
  }
  
}


export default NewFriend;