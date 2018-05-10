import React, { Component } from "react";
import { Form, FormGroup, Label, Button } from 'reactstrap';
import axios from "axios";

class FriendForm extends Component {
  constructor(props) {
    super (props);
    this.state = {
      name:"",
      age:"",
      email:""
    };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAge = (event) => {
    this.setState({ age: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  

 addNewFriend = () => {
  const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
  };

    axios
    .post(`http://localhost:5000/friends`, newFriend)
    .then(response => 
	  { response.data }
	 )
    .catch(err => {
       console.log(err);
      });
}

  
render () {
  return (

     <Form>
      <FormGroup>
	<Label>Name</Label>
	<input onChange={this.handleName} placeholder="name" name="name" value={this.state.name} />
      </FormGroup>
      <FormGroup>
	<Label>Age</Label>
        <input onChange={this.handleAge} placeholder="age" name="age" value={this.state.age} />
      </FormGroup>
      <FormGroup>
	<Label>Email</Label>
        <input onChange={this.handleEmail} placeholder="email" name="email" value={this.state.email} />
      </FormGroup>
      <Button onClick={this.addNewFriend}>Add</Button>
      </Form>
  );
}
  


};


export default FriendForm;
