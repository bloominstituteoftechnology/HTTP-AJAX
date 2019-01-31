import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    friends: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data, error: "" });
      })
      .catch(error => {
        this.setState({ error: error.response.data.message });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>A List of People I don't know</h1>
        <FriendsList friends={this.state.friends} />
        {this.state.error && <h4>You don't have any friends!</h4>}
      </div>
    );
  }
}

export default App;
