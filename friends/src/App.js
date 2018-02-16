import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import FriendList from './FriendList';
import FriendForm from './FriendForm';

class App extends Component {
  state = {
    friends: [],
  };

  render() {
    return (
      <div className="App">
        <FriendForm onCreate={this.loadFriends} />
        <FriendList
          friends={this.state.friends}
          onDelete={this.removeFriend}
          onUpdate={this.updateFriend}
        />
      </div>
    );
  }

  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data,
        });
      })
      .catch(() => {
        console.error('error getting data');
      });
  };

  removeFriend = id => {
    const endpoint = `http://localhost:5000/friends/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        console.log('response from delete', response);
        this.setState({ friends: response.data });
      })
      .catch(() => {
        console.error('error deleting');
      });
  };

  updateFriend = friend => {
    const endpoint = `http://localhost:5000/friends/${friend.id}`;
    return axios
      .put(endpoint, friend)
      .then(response => {
        console.log('response from update', response);
        this.setState({ friends: response.data });
      });
      
  };
}

export default App;
