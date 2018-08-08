import React, { Component } from "react";

import "./App.css";
import Friend from "./components/friends/Friend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friend />
      </div>
    );
  }
}

export default App;
