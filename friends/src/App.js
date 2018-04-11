import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Friend from "./components/Friend";
import FriendList from "./components/FriendList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  // fetch data here

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Routes Here */}
        <Route exact path="/" component={FriendList} />
        <Route path="/friends/:id" component={Friend} />
      </div>
    );
  }
}

export default App;
