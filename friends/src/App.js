import React, { Component } from 'react';
import axios from 'axios';
import { Route  } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import Navigation from './components/Navigation';
import Home from './components/Home';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/friends' component={FriendsList} />
      <Route path='/friends/edit/:id' render= { props => <Friend {...props } component={Friend} />}/>     
      </div>
    );
  }
}

export default App;
