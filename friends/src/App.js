import React, { Component } from 'react';

import './App.css';
import FriendList from './FriendList';
import FriendForm from './FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendList />
      </div>
    );
  }
}

export default App;
