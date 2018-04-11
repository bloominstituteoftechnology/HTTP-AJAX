import React, { Component } from 'react';
import './App.css';
import FriendsList from "./Components/FriendsList";
import { Route } from "react-router-dom";
import AddFriend from "./Components/AddFriend";
import Friend from "./Components/Friend";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FriendsList} />
        <Route path="/addfriend" component={AddFriend} />
        <Route path="friends/:id" component={Friend} />
      </div>
    );
  }
}

export default App;