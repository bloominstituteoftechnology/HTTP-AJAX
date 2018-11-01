import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
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
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.friends.map(friend => (
            <FriendsList key={friend.id} friends={friend} />
          ))}
        </div>
        <form>
          <input type="text" placeholder="name..." />
          <input type="text" placeholder="age..." />
          <input type="text" placeholder="email..." />
        </form>
      </div>
    );
  }
}

export default App;
