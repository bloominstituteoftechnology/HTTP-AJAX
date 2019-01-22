import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import FriendsList from "./Components/FriendsList";
import logo from "./logo.svg";
import "./App.css";

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
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />{" "}
      </div>
    );
  }
}

export default App;
