import React, { Component } from "react";
import axios from 'axios';

import "./App.css";
import FriendsList from "./FriendsList";

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
       .then(response => {
          this.setState({ friends: response.data });
       })
       .catch(err => {
         console.log(err);
       });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Friends</h1>
        </header>
        {console.log(this.state.friends)}
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
