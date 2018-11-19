import React, { Component } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
// import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    // axios
    //   .get("https://localhost:5000/friends/")
    //   .then(res => this.setState({ friends: res }))
    //   .catch(err => console.log(err));
    fetch("http://localhost:5000/friends")
      .then(res => res.json())
      .then(friends => this.setState({ friends: friends }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
