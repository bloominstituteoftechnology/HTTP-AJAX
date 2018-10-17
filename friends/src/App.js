import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myFriends: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <Route exact path='/friend' component={FriendList} />
      </div>
    );
  }
}

export default App;