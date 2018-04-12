import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      email: ""
    };
  }
  // handles new input in the update form
  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // update a friend's data on a server
  updateFriend = () => {};

  // delete friend's data from the server
  deleteFriend = () => {};
  // render data for each friend
  render() {
    console.log(this.state.value);
    return [
      <div>
        <Link to={`/friend/${this.props.friend.id}`}>
          {this.props.friend.name}
        </Link>
      </div>,
      <div>{this.props.friend.age}</div>,
      <div>{this.props.friend.email}</div>,
      <form>
        <input
          name="age"
          value={this.state.age}
          placeholder="Age"
          onChange={this.handleNewInput}
        />
        <input
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleNewInput}
        />
        {/* Save updates to a friend */}
        <button onClick={this.updateFriend}>Save Changes</button>
        <button onClick={this.deleteFriend}>Delete Friend</button>
      </form>
    ];
  }
}
