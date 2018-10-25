import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
  // put state here?
  state = {
    name: "",
    age: "",
    email: ""
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />

        <button type="submit">Save Friend</button>
      </form>
    );
  }

  submitHandler = event => {
    event.preventDefault(); // prevents reload
    // const newFriend = { ...this.state.name, this.state.age }; // makes copy of state then overrides age
    // REMOVED additional copy  of state is NOT NEEDED.

    // command to create the data
    axios
    .post("http://localhost:5000/friends", this.state) 
      .then(response => {
        console.log("post worked", response);
      })
      .catch(error => {
        console.error("Error making post", error);
      });
  };
  handleInputChange = event => {
    // event.target is an object that represents the input
    const { name, value } = event.target;  // destructuring

    // const name = event.target.name;
    // let value = event.target.value; // using `let` because value will change

    // console.log("input name:", event.target.name); // show the value of input when it changes
    console.log(this.state, name, value)

    this.setState({ [name]: value, }); // name is a variable 
  };
}

export default FriendForm;
