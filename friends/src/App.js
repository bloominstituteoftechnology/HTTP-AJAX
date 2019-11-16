import React, { Component } from 'react';
import './App.css';

import FriendList from './components/FriendList';
import FriendInput from './components/FriendInput';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="friend-input">  
          <FriendInput />
        </div>  
        <div className="friend-list">
          <FriendList />
        </div>  
      </div>
    );
  }
}

export default App;
