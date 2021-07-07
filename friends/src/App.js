import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List:</h1>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
