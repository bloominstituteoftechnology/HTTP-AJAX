import React, { Component } from "react";
import Friend from "./Friend";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/friends/" component={Friend} />
        </Switch>
      </div>
    );
  }
}

export default App;
