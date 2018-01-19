import React, { Component } from 'react';
import FriendsList from './components/FriendsList/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>navbar</h1>
        <h1>App</h1>
        <FriendsList />
        <p>some stuff</p>
      </div>
    )
  }
}

export default App;
