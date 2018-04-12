import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";
import FriendCard from "./components/Friend";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        {/* Routes Here */}
        <Route exact path="/" component={FriendList} />
        <Route path="/friends/:i" component={FriendCard} />
      </div>
    );
  }
}
