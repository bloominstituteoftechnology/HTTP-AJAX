import React, { Component } from "react";
import axios from "axios";

class FriendForm extends React.Component {
  // put state here?
  state = {
    name: "",
    age: "",
    email: "",
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onchange={handleInputChange}
        />

        <label>Age</label>
        <input
          type="number"
          name="Age"
          value={this.state.age}
          onchange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="Email"
          value={this.state.email}
          onchange={handleInputChange}
        />

        <button type="submit">Save Friend</button>
      </form>
    );
  }
  submitHandler = (event) => {
    event.preventDefault(); // prevents reload
    const newFriend = { ...this.state, age } // makes copy of state then overrides age
    axios.post('http://localhost:5000/friends', this.state) // command to create the data
    .then(response =>{
      console.log('response from post', response);
    })
    .catch(error => {
      console.log('response from post', response);
    })
  }
  }

   
export default FriendForm;
