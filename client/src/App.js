import React, { Component } from 'react';
import axios from 'axios';

import FriendList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

const API_URL = 'http://localhost:5000';
class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/friends`)
      .then(response => this.setState({ friends: response.data }));
  }

  addFriend = data => {
    axios
      .post(`${API_URL}/friends`, data)
      .then(response => this.setState({ friends: response.data }));
  };

  render() {
    return (
      <div>
        <h1>Your Friends</h1>
        <FriendList friends={this.state.friends} />
        <FriendsForm onAddFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
