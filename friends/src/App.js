import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <AddFriend />
      </div>
    );
  }
}

export default App;
