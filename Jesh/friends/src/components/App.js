import React, { Component } from 'react';
import logo from '../art/logo.svg';
import frenz from '../art/frenz.png';
import '../css/App.css';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to LS-AJAX Friends:</h2>
          <img src={frenz} alt='Friends'></img>
        </div>
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
