import React, { Component } from "react";

import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import axios from "axios";
import { Route } from "react-router-dom";

const blankFriend = {
  name: "",
  email: "",
  age: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newFriend: {
        name: "",
        email: "",
        age: ""
      },
      friendsList: [],
      editingId: null,
      isEditing: false
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
            age: ""
          }
        })
      );
  };
  editFriend = (e, friend) => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editingId}`,
        this.state.newFriend
      )
      .then(res =>
        this.setState({
          friendsList: res.data,
          editingId: null,
          isEditing: false,
          newFriend: blankFriend
        })
      );
  };
  setupEditFriendForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      newFriend: friend,
      isEditing: true,
      editingId: friend.id
    });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friendsList: res.data }));
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <FriendsList
                {...props}
                friendsList={this.state.friendsList}
                deleteFriend={this.deleteFriend}
                editFriend={this.editFriend}
                setupEditFriendForm={this.setupEditFriendForm}
              />
              <FriendsForm
                newFriend={this.state.newFriend}
                handleNewFriends={this.handleNewFriends}
                addNewFriend={this.addNewFriend}
                isEditing={this.state.isEditing}
                editFriend={this.editFriend}
              />
            </React.Fragment>
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
