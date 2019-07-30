
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import { FriendForm } from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fancy React Friends List</h1>
        </header>
        <Route exact path="/" component={FriendsList} />
        <Route path="/addfriend" component={FriendForm} />
      </div>
    );
  }
}

export default App;