import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Friends from './components/FriendsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo1" alt="logo" />
          <img src={logo} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo3" alt="logo" />
          <img src={logo} className="App-logo4" alt="logo" />
          <img src={logo} className="App-logo5" alt="logo" />
          <img src={logo} className="App-logo6" alt="logo" />
          <img src={logo} className="App-logo7" alt="logo" />
        </header>
        <Friends />
      </div>
    );
  }
}

export default App;
