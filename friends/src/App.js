import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList/FriendsList.js';
import FriendsForm from './Components/FriendsForm/FriendsForm.js';
import Friend from './Components/Friend/Friend.js';
import {Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={FriendsForm}></Route>
        <Route exact path='/friends' component={FriendsList}></Route>
        <Route path='/friends/:id' component={Friend}></Route>
      </div>
    )
  }
}

export default App;
