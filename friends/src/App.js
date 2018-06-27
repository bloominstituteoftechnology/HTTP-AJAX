import React, { Component } from 'react';
import FriendList from './Friends/FriendList';
import Friend from './Friends/Friend';
import FriendCard from './Friends/FriendCard';
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
     friends: []

    };
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">LAMBDA SCHOOL</h1>
          <FriendList  />
      </div>
    );
  }
}

export default App;
