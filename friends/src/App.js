import React, { Component } from 'react';
import './App.css';
import Friends from './Components/Friends.js';
import FriendsList from './Components/FriendsList.js';


class App extends Component {
  render() {
    return (
     <div className="App">
      <header className="App-header">
        <h1>My friends</h1>
      </header>
     <Friends />
     <FriendsList />
      </div>
    );
  }
}

export default App;