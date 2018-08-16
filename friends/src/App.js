import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Friend from "./components/Friend";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
      this.setState({
        friends: response.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <NavLink to={`/${this.state.friends.id}`} />
        <Route path="/:id" component={Friend} />
        <ul>
          {this.state.friends.map(friend => (
            <Friend key={friend.id} friends={friend} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
