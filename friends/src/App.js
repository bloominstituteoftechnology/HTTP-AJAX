import React, { Component } from 'react';
import './App.css';
import FriendsList from './Friends/FriendList';
import Friend from './Friends/Friend';
import NewFriend from './Friends/NewFriend';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="heading">Lambda Friends</h1>
        <Route path="/addfriend" component={NewFriend}/>
        <Route path="/friend/:id" component={Friend}/>
        <Route exact path="/" component={FriendsList}/>
      </div>
    );
  }
}

export default App;
