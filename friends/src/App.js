import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import ReactDOM from "react-dom";

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
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>List of Friends</h1>
        {this.state.friends.map(friend => (
          <div>
            <h2>{friend.name}</h2>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
