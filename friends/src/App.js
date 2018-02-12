import React, { Component } from 'react';
import FriendsList from "./components/FriendsList.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList className="App FriendsListContainer"/>
      </div>
    );
  }
}

export default App;
