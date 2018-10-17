import React, { Component } from "react";
import "./App.css";

import Friends from "./components/Friends";
import AddFreind from "./components/AddFriend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFreind />
        <Friends />
      </div>
    );
  }
}

export default App;
