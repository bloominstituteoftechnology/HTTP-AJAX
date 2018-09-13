import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendList />
      </div>
    );
  }
}

export default App;
