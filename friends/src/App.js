import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import Friend from "./components/Friend";
import FriendList from "./components/FriendList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  render() {
    // console.log('name', this.state.name);
    // console.log('age', this.state.age);
    // console.log('email', this.state.email);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>

        {/* Routes Here */}
        <Route exact path="/" component={FriendList} />
      </div>
    );
  }
}

export default App;
