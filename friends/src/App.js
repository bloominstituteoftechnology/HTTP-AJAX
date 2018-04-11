import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import FriendList from './components/FriendList/FriendsList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FriendList />
      </div>
    )
  }
}



export default App;
