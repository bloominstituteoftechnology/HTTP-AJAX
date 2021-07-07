import React, { Component } from 'react';
import FriendList from './components/FriendList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendList />
        </header>
      </div>
    );
  }
}

export default App;
