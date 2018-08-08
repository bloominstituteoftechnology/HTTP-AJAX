import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import Friend from './components/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  render() {
    return (
      <div className="App">
        <FriendList />
      </div>
    );
  }
}

export default App;
