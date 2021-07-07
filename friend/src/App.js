import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsForm from "./components/FriendsForm";
import Friend from "./components/Friend";
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <div>
     <Route exact path="/" component={FriendsList}></Route>
        <Route path="/friends/:id" component={Friend}></Route>
        <Route exact path="/" component={FriendsForm}></Route>
           
      </div>
    );
  }
}

export default App;
