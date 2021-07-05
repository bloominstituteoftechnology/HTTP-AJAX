import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList.js';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A list of all my Frieeennnddssss</h1>
        </header>
        <div className='container-fluid'>
          <FriendsList />
        </div>
      </div>
    );
  }
}

export default App;
