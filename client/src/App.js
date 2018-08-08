import React, { Component } from 'react';
import axios from 'axios';

import FriendList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

const API_URL = 'http://localhost:5000';
class App extends Component {
  state = {
    friends: []
  };

  updateState = () => {
    axios
      .get(`${API_URL}/friends`)
      .then(response => this.setState({ friends: response.data }));
  };

  componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <div>
        <h1>Your Friends</h1>
        <FriendList friends={this.state.friends} />
        <FriendsForm />
      </div>
    );
  }
}

export default App;
