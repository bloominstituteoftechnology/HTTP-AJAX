import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Friend from './components/Friend';
import './App.css';

import Home from './components/Home';
import FriendList from './components/FriendList';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Home />
        <Route exact path="/"/>
        <Route exact path ="/friends" component={ FriendList }/>
        <Route exact path ="/friends/:id" component={ Friend }/>
      </div>
    );
  }
}

export default App;
