import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendList;;'
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
