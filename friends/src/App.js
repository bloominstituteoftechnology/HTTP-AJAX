import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Friends from  './Friends.js';
import NewFriend from './NewFriend.js';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className = "App">
      <Friends />
      <NewFriend />
     </div> 
    );
  }  
}

export default App;
