import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my shitty friends list</h1>
        </header>
        <Friends />
      </div>
    );
  }
}

export default App;
