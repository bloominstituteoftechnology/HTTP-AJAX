import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import NewFriend from './components/NewFriend';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="heading">My Friends</h1>
        <Route path="/addfriend" component={NewFriend}/>
        <Route path="/friend/:id" component={Friend}/>
        <Route exact path="/" component={FriendsList}/>
      </div>
    );
  }
}

export default App;
