import React, { Component } from 'react';
import logo from './logo.svg';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendsList />
        <AddFriendForm />
      </div>
    );
  }
}

export default App;
