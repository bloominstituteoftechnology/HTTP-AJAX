import React, { Component } from 'react';

import './App.css';

import FriendsContent from './components/FriendsList/FriendsContent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsContent />
      </div>
    );
  }
}

export default App;
