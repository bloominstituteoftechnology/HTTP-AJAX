import React, { Component } from 'react';
import DisplayFriends from "./Components/DisplayFriends"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayFriends />
      </div>
    );
  }
}

export default App;
