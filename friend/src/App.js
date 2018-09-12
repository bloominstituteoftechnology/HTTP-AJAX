import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <div>
     <Route exact path="/"component={FriendsList}></Route>
         
      </div>
    );
  }
}

export default App;
