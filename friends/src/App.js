import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import DisplayFriends from "./components/DisplayFriends";

const itaIta = {
  fontStyle: "italic"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">I'm inside a React App!</h1>
        </header>
        <p style={itaIta} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DisplayFriends />
      </div>
    );
  }
}

export default App;
