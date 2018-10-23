import React, { Component } from 'react';

import FriendsList from './FriendsList';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendsList />
        </header>
      </div>
    );
  }
}

export default App;
