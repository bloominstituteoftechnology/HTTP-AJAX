import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";

import Friend from "./components/Friend";
import Friends from './components/Friends';


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
        <Friends data={this.state.friends} />
      </div>
    );
  }
}

export default App;
