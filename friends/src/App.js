import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FriendList from './Components/FriendList';

class App extends Component {
  constructor() {
    super();
  }

  newFriend = friend => {
    
  };

  render() {
    return (
      <div className="App">
        <FriendList/>
      </div>
    );
  }
}

export default App;
