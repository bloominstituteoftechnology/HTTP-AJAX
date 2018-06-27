import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: String,
        age: Number(),
        email: String
      }
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: Number(this.state.age),
        email: this.state.email
      })
      .then(response => {
        console.log(response);
        this.props.newFriend(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    event.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          required
          type="number"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
        />
        <input
          required
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
