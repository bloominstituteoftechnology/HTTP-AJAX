import React, { Component } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Test</h1>
          <FriendsList />
        </header>
      </div>
    );
  }
}

export default App;
