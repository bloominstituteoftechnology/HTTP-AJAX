import React, { Component } from 'react';
import FriendsList from './components/FriendsList/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <FriendsList />
      </div>
    )
  }
}

export default App;
