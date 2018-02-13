import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/friendsList.js';
import FriendsForm from './components/friendsForm.js';

class App extends Component {
  render() {
    return (

      <header className="App">
        <h1>Friends </h1>
        <FriendsList />
        <FriendsForm />
      </header>

    )
  }
}
export default App;
