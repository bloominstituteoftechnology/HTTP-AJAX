import React, { Component } from 'react';
import logo from './cookiemonster.jpeg';
import './App.css';
import FriendsPage from './components/FriendsPage';
// import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <FriendsPage />
      </div>
    );
  }
}

export default App;
