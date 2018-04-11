import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import FriendsList from "./component/FriendsList";
import Home from "./component/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cambridge Analytica</h1>
        <Route exact path="/" component={Home} />
        <Route path="/friends" component={FriendsList} />
      </div>
    );
  }
}

export default App;
