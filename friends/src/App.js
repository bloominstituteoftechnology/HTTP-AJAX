import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
