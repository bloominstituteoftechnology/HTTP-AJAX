import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList.js';
import FriendForm from './components/FriendForm.js'

class App extends Component {
  
  render() {
    return (
    <div>
    <FriendForm />
    <FriendList />
    </div>
    )
  }
}

export default App;
