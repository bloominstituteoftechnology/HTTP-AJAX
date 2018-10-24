import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';

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
