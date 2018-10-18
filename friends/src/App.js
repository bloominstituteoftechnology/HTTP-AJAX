import React, { Component } from "react";

import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newFriend: {
        name: "",
        email: "",
        age: ""
      },
      friendsList: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friendsList: res.data }));
  }

  handleNewFriends = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };
  addNewFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(res =>
        this.setState({
          friendsList: res.data,
          newFriend: {
            name: "",
            email: "",
            age: "",
            id: this.state.friendsList.length + 1
          }
        })
      );
  };
  updateFriend = e => {};

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friendsList: res.data }));
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <FriendsList
          friendsList={this.state.friendsList}
          deleteFriend={this.deleteFriend}
        />
        <FriendsForm
          newFriend={this.state.newFriend}
          handleNewFriends={this.handleNewFriends}
          addNewFriend={this.addNewFriend}
        />
      </React.Fragment>
    );
  }
}

export default App;
