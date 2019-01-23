import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentdidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <p key={friend.id}>{friend.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
