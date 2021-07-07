import React, {Component} from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-logo">
          <img
            className="friends-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg"
            alt="friends logo"
          />
        </div>

        <FriendsList />

        <footer>
          <a
            href="https://github.com/gsamaniego41/HTTP-AJAX"
            target="_blank"
            title="GitHub Repo"
          >
            A Lambda School project by Gabe <i className="fab fa-github" />
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
