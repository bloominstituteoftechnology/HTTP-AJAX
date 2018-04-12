import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import FriendList from "./components/FriendList";
import FriendCard from "./components/FriendCard";

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     friends: []
  //   };
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        {/* Routes Here */}
        <Switch>
          <Route exact path="/" component={FriendList} />
          <Route path="/:id" component={FriendCard} />
          <Route component={() => <h1>Invalid! URL GO BACK HOME</h1>} />
        </Switch>
      </div>
    );
  }
}
