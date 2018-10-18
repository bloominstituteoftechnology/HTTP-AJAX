import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendsList from "./components/FriendsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <img
            className="friends-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg"
            alt="friends logo"
          />
          <a href="https://github.com/gsamaniego41/HTTP-AJAX" target="_blank">
            <i className="fab fa-github" />
          </a>
        </div>

        <FriendsList />
      </div>
    );
  }
}

export default App;
