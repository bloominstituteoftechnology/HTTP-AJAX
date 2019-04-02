import React, { Component } from 'react';
import axios from "axios";

import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

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
  addFriend = (newFriend) => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Friends List</h1>
        <div className="content">
          <AddFriendForm addFriend={this.addFriend} />
          <FriendsList friends={this.state.friends} />
        </div>
        
      </div>
    );
  }
}

export default App;
