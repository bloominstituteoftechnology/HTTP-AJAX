import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import FriendsList from './components/FriendsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/friends' component={FriendsList} />
      </div>
    );
  }
}

export default App;
