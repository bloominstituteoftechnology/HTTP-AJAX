import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { friends: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Lambda Friends</h1>
        <FriendsList friends={this.state.friends} />
        <FriendForm />
      </div>
    );
  }
}

export default App;
