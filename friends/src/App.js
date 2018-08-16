import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./App.css";

import Friend from "./components/Friend";
import Friends from "./components/Friends";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Route path="/:id" component={Friend} />
        <Friends />
      </div>
    );
  }
}

export default App;
