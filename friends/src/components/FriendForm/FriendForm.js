import React, { Component } from "react";
import axios from "axios";
import "./FriendForm.css";

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
    this.addFriend = this.addFriend.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Application to become a friend.</h1>
        <form onSubmit={this.addFriend}>
          <div>
            <label>Name: </label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Age: </label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email: </label>
            <input type="text" name="name" />
          </div>
          <button className="submitButton">Submit</button>
        </form>
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

export default FriendForm;
