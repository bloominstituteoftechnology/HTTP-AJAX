import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList/FriendsList.js';
import FriendsForm from './Components/FriendsForm/FriendsForm.js';
class App extends Component {
  render() {
    return (
      <div>
        <FriendsList/>
        <FriendsForm/>
      </div>
    )
  }
}

export default App;
