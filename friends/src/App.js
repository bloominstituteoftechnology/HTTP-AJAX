import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FriendList from './components/FriendList.js'


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
