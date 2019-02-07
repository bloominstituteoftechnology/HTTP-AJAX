import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import FriendList from './components/FriendList';
import UpdateFriends from './components/UpdateFriends';

class App extends Component {
  
  // update = () => {
  //   console.log("HI")
  // }

  render() {
    return (
      <div className="App">
        <Home />
        <Route exact path="/"/>
        <Route exact path ="/friends" component={ FriendList }/>
        <Route exact path = "/friends/:id" component = { UpdateFriends }/>
        {/* <UpdateFriends update = {this.update}/> */}
      </div>
    );
  }
}

export default App;
