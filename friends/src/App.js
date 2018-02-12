import React, { Component } from 'react';
import FriendsList from './components/FriendsList/FriendsList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>Friends List</h1>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
