import React, { Component } from 'react';

import './App.css';
import { FriendsList } from './components/Friends';
// import { FriendManager } from './components/AddFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        {/* <FriendManager />  */}
      </div>

    );
  }
}

export default App;
