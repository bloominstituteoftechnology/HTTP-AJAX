import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './FriendList';
import FriendForm from './FriendForm';


class App extends Component {
  render() {
    return (
      // see screenshot81
      <div className="App">
        <FriendForm />
        <FriendList />
      </div>
   
      /* THIS IS ALL BOILERPLATE CREATED BY CREAT-REACT-APP DELETE IT 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
    );
  }
}

export default App;
