import React, { Component } from 'react';
import axios from "axios";

import FriendsList from './components/FriendsList';

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
        <h1 className="header">Friends List</h1>
        <div className="friends-list-wrapper">
          {this.state.friends.map(friend => <FriendsList key={friend.id} name={friend.name} age={friend.age} email={friend.email} />)}
        </div>
      </div>
    );
  }
}

export default App;
