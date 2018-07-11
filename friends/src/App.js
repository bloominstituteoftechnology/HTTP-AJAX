import React, { Component } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendInput from "./components/FriendInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <FriendInput />
        <FriendsList />
      </div>
    );
  }
}

export default App;
