import React, { Component } from 'react';
import './App.css';
import Friends from './FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lamda Friends</h1> 
        </header>
          <Friends />
      </div>
    );
  }
}

export default App;