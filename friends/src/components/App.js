import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './Friends/FriendsList';
import AddFriend from './Friends/AddFriend';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }
  fetchFriends() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.fetchFriends();
  }
  updateFriends = friends => {
    this.setState({ friends });
  };

  render() {
    return (
      <div className="App">
        <FriendsList
          updateFriends={this.updateFriends}
          friends={this.state.friends}
        />
        <AddFriend updateFriends={this.updateFriends} />
      </div>
    );
  }
}

export default App;