import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FriendsPage from './components/FriendsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsPage />
      </div>
    );
  }
}

export default App;
