import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Friends";
import { Route } from "react-router-dom";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsList: []
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState(() => ({ friendsList: response.data }));
      })
      .catch(err => {
        console.log("Server Error");
      });
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Friends friendsList={this.state.friendsList} {...props} />}
        />
      </div>
    );
  }
}

export default App;
