import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
  }
  render() {
    return (
      <div className="App">
      <ul>
        {this.state.friends.map(friend => { return(
          <li key = {friend.email}>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>E-Mail: {friend.email}</div>
          </li>
      )  })}
      </ul>
      </div>
    );
  }
  componentWillMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(error => {
      console.log('There was an error', error)
    })
  }
}

export default App;
