import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Friends";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsList: [],
      name: "",
      age: null,
      email: ""
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <Friends friendsList={this.state.friendsList} {...props} />
          )}
        />

        <form onSubmit={this.addNewFriend}>
          <input
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
            value={this.state.name}
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="age"
            placeholder="Age"
            value={this.state.age}
            type="number"
          />
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            value={this.state.email}
            type="email"
          />
        </form>
      </div>
    );
  }
}

export default App;
