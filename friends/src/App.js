import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import './App.css';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.requestFriends();
  }

  requestFriends = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <FriendsForm submitted={this.requestFriends} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
