import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import axios from 'axios';
import FriendAdd from './FriendAdd';

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">UltimateFriends.com</h1>
        </header>
        <FriendAdd />
        <FriendsList friendProp={this.state} />
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
