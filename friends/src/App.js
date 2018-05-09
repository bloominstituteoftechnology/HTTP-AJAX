import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FriendsList />
      </div>
    );
  }
}

export default App;
