import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfFriends from "./Components/ListOfFriends";
import FriendForm from "./Components/FriendForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  friendsetter = data => {
    this.setState({ friends: data });
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        const friends = response.data;
        this.setState({ friends });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListOfFriends friendslist={this.state.friends} />
        <FriendForm friendsetter={this.friendsetter} />
      </div>
    );
  }
}

export default App;
