import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import FriendsList from "./component/FriendsList/FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        // console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <ul className="friends-nav">
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Route
          exact
          path={`/friends`}
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
