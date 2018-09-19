import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends/`)
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log('Error', err);
    });
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.state.friends.map(friend => <div key={friend.id} className="friend-card" >{friend.name} {friend.age}</div>)}
        </div>
      </div>
    );
  }
}

export default App;
