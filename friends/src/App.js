import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    // fetch data from the api
    console.log("inside didmount");
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("inside render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React APP</h1>
        </header>
        {this.state.friends.map(friend => (
          <p key={friend.name}>
            {" "}
            {friend.name} {friend.age}{" "}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
