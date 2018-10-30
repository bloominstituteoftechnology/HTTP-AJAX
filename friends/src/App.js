import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendsList'
import SoloFriend from './Components/SoloFriend'
// import axios from ? 


class App extends Component {




  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <FriendList />
          <SoloFriend />
        </header>
      </div>
    );
  }
}

export default App;
