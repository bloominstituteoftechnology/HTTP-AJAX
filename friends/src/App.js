import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendForm from './Components/FriendForm';
import FriendsList from './Components/FriendsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Friends List</h1>
        </header>
        
        <main>
          <FriendForm />
          <FriendsList />
        </main>
      </div>
    );
  }
}

export default App;
