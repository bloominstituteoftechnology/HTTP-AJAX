import React, { Component } from 'react';
import './App.css';
import FriendsList from './Friends/FriendsList'
import { Route } from 'react-router-dom';
import FriendInput from './Friends/FriendInput';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends</h1>
        </header>
        <FriendsList />
        <Route exact path='/' component = {FriendsList} />
        <Route exact path='/add' component = {FriendInput} />
      </div>
    );
  }
}

export default App;
