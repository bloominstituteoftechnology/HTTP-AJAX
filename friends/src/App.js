import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from "./FriendsList.js";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
	<Route path="/" component={FriendsList} />  
      </div>
    );
  }
}

export default App;

//I mostly left this alone except to Route into FriendsList and add to imports so that everything works
