import React, { Component } from 'react';
import logo from './logo.svg';
import FriendsList from './FriendsList';
// import FriendZone from './FriendZone';
import './App.css';

class App extends Component {


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a list of friends.</h1>
          {/* <div className="FriendZone"> */}
          {/* <FriendZone /> */}
          {/* </div> */}
        </header>
        <div className="FriendListContainer">
          <FriendsList />
        </div>
      </div>
    );
  }
}

export default App;
