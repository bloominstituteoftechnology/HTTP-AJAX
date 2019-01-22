import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Route, Link} from 'react-router-dom';
import "./App.css";

class App extends React.Component{
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
        console.log("response:", response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log("you got an error:", err));
  }
  render() {
    return (
      <div className="App">
        <h1>Jamar works on HTTP-AJAX</h1>
        {this.state.friends.map(friend => (
          <ul>{friend.name}</ul>
        ))
        }
        <Route exact path="/" />
        <Route path ="/friends" />
      </div>
    );
  }
}

export default App;
