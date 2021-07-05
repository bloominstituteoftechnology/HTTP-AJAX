import React, { Component } from 'react';
import './App.css';
import { Route }from 'react-router-dom';

import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import Friend from './components/Friend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Friends} />
        <Route path='/add' component={AddFriend} />
        <Route path='/friend/:id' component={Friend} />
      </div>
    );
  }
}

export default App;
