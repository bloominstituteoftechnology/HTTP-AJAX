import React, { Component } from "react";
import axios from "axios";
import "./Friends.css";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
    this.addFriend = this.addFriend.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>List of Friends</h1>
        {this.state.friends.map(friend => (
          <div>
            <h2>{friend.name}</h2>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
          </div>
        ))}
      </div>
    );
  }

  async addFriend(event) {
    event.preventDefault();
    const friendInput = Array.from(event.target.querySelectorAll("input"));
    const newFriend = {
      id: this.state.friends.length + 1,
      name: friendInput[0].value,
      age: Number(friendInput[1].value),
      email: friendInput[2].value
    };
    event.target.reset();
    await axios
      .post("http://localhost:5000/friends", newFriend)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default Friends;
