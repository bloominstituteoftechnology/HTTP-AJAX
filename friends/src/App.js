import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import NewFriend from './components/NewFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewFriend />
        <Friends />
      </div>
    );
  }
}

export default App;
