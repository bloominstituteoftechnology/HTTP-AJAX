import React, { Component, Fragment } from "react";

import "./App.css";
import Friend from "./components/friends/Friend";

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <Friend />
      </Fragment>
    );
  }
}

export default App;
