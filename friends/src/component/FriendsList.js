import React, { Component } from "react";
import axios from "axios";
import FriendCard from "./FriendCard";
import "./FriendsList.css";

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frineds: [],
      name: "",
      age: "",
      email: "",
      showUpdateFriend: false
    };
  }
  // mount the API, display error if error occurs
  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log("Server Error", err);
      });
  };

  // handle the text that is being typed in
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // when button is clicked: save info of a friend
  // set friend's props (name, age, email) to values of inputs below
  // post friend on to http://localhost:5000/friends/
  // console.log out to make sure array is "pushed".
  // reset field of name, age, and email
  // refresh the whole page to update the FriendsList
  saveFriendData = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
        console.log(response);
        this.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    if (!this.state.friends) {
      return <div>Fetching Friends List</div>;
    }

    return (
      <div className="friend-list-container">
        <div className="input-container">
          <div className="input-items">
            <h3>Add a new friend</h3>
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <input
              type="number"
              min="0"
              step="1"
              max="110"
              onChange={this.handleTextInput}
              placeholder="Age"
              name="age"
              value={this.state.age}
            />
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="email"
              name="email"
              value={this.state.email}
            />
            <button onClick={this.saveFriendData}>Save Friend</button>
          </div>
        </div>

        <div className="friends-list">
          {this.state.friends.map(friend => (
            <FriendCard
              key={friend.id}
              friend={friend}
              getFriends={this.getFriends}
            />
          ))}
        </div>
      </div>
    );
  }
}
