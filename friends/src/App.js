import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Friend from './Friend';
import Form from './Form';
import { runInThisContext } from 'vm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
  }

  updateFriends = (para1) => {
    axios.post('http://localhost:5000/friends', para1)
    .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        })
    })
      .catch(err => console.log(err));
}
  
  render() {
    return (
      <div className="App">
        <h1>Current Friends</h1>
        <ul>
          {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
        </ul>
        <h2>New Friend Form</h2>
        <Form friend={this.state.friend} updateFriends={this.updateFriends} />
      </div>
    );
  }
}

export default App;
