import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList/FriendsList.js';
import FriendsForm from './Components/FriendsForm/FriendsForm.js';
import {Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={FriendsForm}></Route>
        <Route path='/list' component={FriendsList}></Route>
      </div>
    )
  }
}

export default App;
