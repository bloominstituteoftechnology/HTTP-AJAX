import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DisplayFriend from "./components/DisplayFriend";
import FriendPage from "./components/FriendPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/friends/:id" component={FriendPage} />
      </Switch>
    );
  }
}

export default App;
