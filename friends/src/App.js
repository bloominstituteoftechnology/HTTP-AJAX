import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import axios from 'axios';

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends : []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendsList />
      </div>
    );
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState(() => ({ friends: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }
}

export default App;
