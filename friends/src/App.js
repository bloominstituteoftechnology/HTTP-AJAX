import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

class App extends Component {

  render() {
    return (
      <div>
        <FriendsList />
        <FriendsForm />
      </div>
    );
  }
}

export default App;
