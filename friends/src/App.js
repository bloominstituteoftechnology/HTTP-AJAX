import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
