import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/friends.js';
import FriendsForm from './components/friendsForm.js';

class App extends Component {
  render() {
    return (

      <header className="App">
        <h1>Friends </h1>
        <Friends />
        <FriendsForm />
      </header>

    )
  }
}
export default App;
