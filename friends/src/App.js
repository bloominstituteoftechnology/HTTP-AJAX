import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList.js';

class App extends Component {
  render() {
    return (
      <div>
        <FriendsList/>
      </div>
    );
  }
}

export default App;
