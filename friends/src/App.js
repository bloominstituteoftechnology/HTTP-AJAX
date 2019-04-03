import React, { Component } from "react";

import "./App.css";

import axios from "axios";
import FriendsList from "./components/FriendsList";
import FormList from "./components/FormList";

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
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log("Error!"));
  }
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <FormList />
      </div>
    );
  }
}

export default App;
