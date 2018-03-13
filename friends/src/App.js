import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends/Friends';
import FriendForm from './components/FriendForm/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <Friends />
      </div>
    );
  }
}

export default App;
