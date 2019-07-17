import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={FriendsList} />
      </div>
    );
  }
}

export default App;
