import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList.js'
import AddFriend from './components/AddFriend.js'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <FriendList />
        <AddFriend />
      </div>
    );
  }
}

export default App;
