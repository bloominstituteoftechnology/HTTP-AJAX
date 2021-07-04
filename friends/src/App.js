import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './comp/home/Home';
import Friends from './comp/friends/Friends';
import FriendsForm from './comp/friends/FriendsForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Home } />
        <Route exact path='/friends' component={ FriendsForm } />
        <Route exact path='/friends/all' component={Friends} />
      </div>
    );
  }
}

export default App;
