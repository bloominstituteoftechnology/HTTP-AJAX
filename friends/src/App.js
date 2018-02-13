import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList/FriendsList.js';
import FriendForm from './components/FriendForm/FriendForm.js';
import './App.css';

class App extends Component {
  state = {
    friends: [],
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>Friends List</h1>
        </header>
        <FriendForm getFriends={this.getFriends.bind(this)} />
        <FriendsList
          friends={this.state.friends}
          deleteFriend={this.deleteFriend.bind(this)}
        />
      </div>
    );
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends').then(response => {
      this.setState({ friends: response.data });
    });
  };

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`).then(response => {
      this.setState({ friends: response.data });
    });
  };

  componentDidMount = () => {
    this.getFriends();
  };
}

export default App;
