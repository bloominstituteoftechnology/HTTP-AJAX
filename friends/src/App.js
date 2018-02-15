import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';


class App extends Component {
  render() {
    return (
      // see screenshot81
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
   
    );
  }
}

export default App;
