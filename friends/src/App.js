import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList/FriendsList'
import { Route } from 'react-router-dom';
import AddFriend from './Components/AddFriend/AddFriend';
import Friend from './Components/Friend/Friend';
import Update from './Components/Update/Update';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FriendsList} />
        <Route path="/addfriend" component={AddFriend} />
        <Route path="friends/:id" component={Friend}/>
        <Route path="/friends/:id/update" component={Update} />
      </div>
    );
  }
}

export default App;
