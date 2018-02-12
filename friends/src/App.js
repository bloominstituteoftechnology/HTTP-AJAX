import React, { Component } from 'react';
import FriendsList from './components/FriendsList/FriendsList.js';
import './App.css';
import FriendForm from './components/FriendForm/FriendForm.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>Friends List</h1>
        </header>
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
