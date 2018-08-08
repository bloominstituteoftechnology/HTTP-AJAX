import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './components/FriendList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FriendList />
      </div>
    );
  }
}

export default App;
