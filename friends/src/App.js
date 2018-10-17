import React, { Component } from 'react';

import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Here is a list of your Friends</h1>
        <FriendsList />
      </div>
    );
  }
}

export default App;
