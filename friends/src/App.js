import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/friends-list';
import Form from './components/form'

class App extends Component {
  render() {
    return (
      <div className="App" style={{margin: '50px'}}>
        <FriendsList />
      </div>
    );
  }
}

export default App;
