import React, { Component } from "react";
import axios from "axios";

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  // handle new input as user types
  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // POST request handler
  handleCreateFriend = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    // POST request
    axios
      .post("http://localhost:5000/friends", friend)
      .then(savedFriend => {
        console.log(friend);
        // componentDidMount to update FriendList
        this.props.getFriendList();
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    // console.log('name', this.state.name);
    // console.log('age', this.state.age);
    // console.log('email', this.state.email);
    return (
      // Add new friend with this form
      <form>
        <label>
          <input
            type="text"
            onChange={this.handleNewInput}
            name="name"
            value={this.state.name}
            placeholder="Name"
          />
        </label>

        <label>
          <input
            type="text"
            onChange={this.handleNewInput}
            name="age"
            value={this.state.age}
            placeholder="Age"
          />
        </label>

        <label>
          <input
            type="text"
            onChange={this.handleNewInput}
            name="email"
            value={this.state.email}
            placeholder="E-mail"
          />
        </label>

        {/* Submit a Friend's info here */}
        <button type="button" onClick={this.handleCreateFriend}>
          Create Friend
        </button>
      </form>
    );
  }
}
