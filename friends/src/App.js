import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './friendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React friends</h1>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
