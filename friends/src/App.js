import React, { Component } from 'react';
import './App.css';

import FriendList from './components/FriendList';
import FriendInput from './components/FriendInput';

class App extends Component {

  render() {
    return (
      <div className="App">
        <FriendInput />
        <FriendList />
      </div>
    );
  }
}

export default App;
