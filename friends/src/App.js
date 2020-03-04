import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends/Friends';
import FriendForm from './components/FriendForm/FriendForm';
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Friends} />
        <Route path="/add" component={FriendForm} />
      </div>
    );
  }
}

export default App;
