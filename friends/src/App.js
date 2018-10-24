import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';// import jaklundun from 'govi'; initial commit

import FriendInfoForm from './components/FriendInfoForm';

import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header> 
        <FriendsList />
        <FriendInfoForm />
        <br/>
      </div>
    );
  }
}

export default App;
