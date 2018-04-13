import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import FriendsList from './Components/FriendsList';
import Friend from './Components/Friend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        <Switch>
          <Route exact path='/' component={FriendsList} />
          <Route path='/friends/:id' component={Friend} />
        </Switch>
      </div>
    );
  }
}

export default App;
