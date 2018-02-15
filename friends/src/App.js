import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//import friends from './server.js';

class App extends Component {
  state = {
    friends: [],
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trying</h1>
        </header>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friends-grid">
          {this.state.friends.map( friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-name">{`Age: ${friend.age}`}</div>
                <div className="friend-name">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}



export default App;
