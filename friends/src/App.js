import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendList";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <FriendsList
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
        />
        <Form addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
