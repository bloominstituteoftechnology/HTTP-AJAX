import React, { Component } from 'react';
import './App.css';
import FriendDetails from './FriendDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome my Friends!</h1>
        <FriendDetails />
      </div>
    );
  }
}

export default App;
