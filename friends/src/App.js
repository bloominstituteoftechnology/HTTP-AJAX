import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import FriendCard from "./components/FriendCard";

class App extends Component {
  constructor() {
    super();
    this.state = { friends: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }
  render() {
    {
      console.log(this.state.friends);
    }
    return (
      <div className="App">
        <h1>Friends:</h1>
        <div className="friends-container">
          {this.state.friends.map(friend => (
            <FriendCard friend={friend} />
          ))
          /* {this.state.friends.map(friend => (
            <FriendCard friend={friend} />
          ))} */
          }
        </div>
      </div>
    );
  }
}

export default App;
