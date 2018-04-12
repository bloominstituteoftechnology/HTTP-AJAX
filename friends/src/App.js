import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Friends from "./Friends/Friends.js";
import FriendsList from "./Friends/FriendsList.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { friends: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({
          friends: response.data
        }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <FriendsList friends={this.state.friends} />}
        />
        <Route
          path="/friends/:id"
          render={props => {
            return (
              <Friends friend={this.state.friends[props.match.params.id]} />
            );
          }}
        />
      </div>
    );
  }
}

// export default App;
