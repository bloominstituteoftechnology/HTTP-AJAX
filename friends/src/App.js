import React, { Component } from 'react';
import './App.css';
import FriendList from '../../../../Lambda-School/workspace/Single-Page-Applications/day3/HTTP-AJAX/friends/src/components/FriendList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendList />
      </div>
    );
  }
}

export default App;
