import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import FriendList from './components/FriendList/FriendsList.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={FriendList} />
        {/* <Route path="friends/:id" component={FriendData} /> */}
      </Switch>
    )
  }
}



export default App;
