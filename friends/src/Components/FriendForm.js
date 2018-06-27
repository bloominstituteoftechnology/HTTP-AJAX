import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    // const friend = {
    //   name: this.state.name,
    //   age: this.state.age,
    //   email: this.state.email
    // };
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => {
        console.log(response);
        this.props.friendsetter(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default FriendForm;
