import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DisplayFriend from "./components/DisplayFriend";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/friends/:id" component={DisplayFriend} />
      </Switch>
    );
  }
}

export default App;
