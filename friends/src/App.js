import React, { Component } from 'react';
import './App.css';
import FriendThing from './Components/Friends';
import { Route } from "react-router-dom";
import HomePage from './Components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Route exact path="/" component={HomePage} />
         <Route path="/friends" component={FriendThing} />
      </div>
    );
  }
}

export default App;
