import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {this.state.friends.map(friend => (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <h6>{friend.age}</h6>
            <h6>{friend.email}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
