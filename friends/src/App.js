import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList';
import FriendsInput from './components/FriendsInput/FriendsInput';

class App extends Component {
  render() {
    return (
    <div>
      <FriendsList />
      <FriendsInput />
    </div>
    );
  }
}

export default App;
