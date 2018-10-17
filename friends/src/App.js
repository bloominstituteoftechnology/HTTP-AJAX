import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendsList from "./components/FriendsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <FriendsList />
      </div>
    );
  }
}

export default App;
