import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
    .then (res => {
      this.setState({friends: res.data});
    })
    .catch (err => {
      console.log(err);
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Friends list here</h1>
        {this.state.friends.map(friend => <div  key={friend.id}>{friend.name}</div>)}
      </div>
    );
  }
}

export default App;
