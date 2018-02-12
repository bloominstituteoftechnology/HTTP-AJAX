import React, { Component } from 'react';
import './App.css';
import AddFriend from './components/AddFriend';
import DisplayFriends from './components/DisplayFriends';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DisplayFriends />
        <AddFriend />
      </div>
    );
  }
}

export default App;
