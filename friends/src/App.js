import React, { Component } from 'react';
import './App.css';
import FriendList from './components/friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendList />
      </div>
    );
  }
}

export default App;