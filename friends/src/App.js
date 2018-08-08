import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

const url = "http://localhost:5000/friends";

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
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  inputHandler = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="App">
        <AddFriend 
          updateInput={this.inputHandler}
          value={this.state.friends.value}
        />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
