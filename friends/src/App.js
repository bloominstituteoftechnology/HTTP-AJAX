import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './FriendsList/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendlist: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data)
        this.setState(() => ({ friendList: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="friend-list">
      
      </div>
    );
  }
}

export default App;

/*
 {this.state.friendList.map(friend => (
          <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email}/>
        ))}


<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/
      
      
      