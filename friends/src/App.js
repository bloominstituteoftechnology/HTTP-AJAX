import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendViewContainer from './FriendViewContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <FriendViewContainer />
      </div>
    );
  }
}

export default App;
