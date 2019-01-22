import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import FriendsList from './Components/FriendsList';
import NavBar from './Components/NavBar/NavBar';
import FriendForm from './Components/FriendForm/FriendForm'


class App extends Component {
  constructor(){
    super();
    this.state= {
    };
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/friends" render={props=> <FriendsList friendsList={this.state.friends}  {...props}/>} />
        <Route path="/addfriend" component={FriendForm} />
      </div>
    );
  }
}

export default App;
