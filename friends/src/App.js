import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state={
      friends:[]
    };
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
  render() {
    if (this.state.friends) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {this.state.friends.map(friend => (
            <li key={friend.id}>{friend.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  }
}

export default App;
