import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Friend from "./Components/Friend";
import FriendsList from "./Components/FriendsList";
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
      .get(`http://localhost:5000/friends`)
      .then(result => {
        this.setState({ friends: result.data });
      })
      .catch(err => console.log(`unable to load Data`));
  }

  render() {
    return (
      <div className="App">
        <Route path="/friends" exact render={FriendsList} />
        <Route path="friends/:id" render={Friend} />
      </div>
    );
  }
}

export default App;
