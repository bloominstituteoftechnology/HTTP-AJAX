import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    friends: [],
    error: ''
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
          error: ''
        })
      })
      .catch(err => {
          this.setState({
            error: err.message
          })
      })
  }

  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}

export default App;
