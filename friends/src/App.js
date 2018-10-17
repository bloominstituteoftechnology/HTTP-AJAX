import React, { Component } from 'react';
import axios from 'axios';

import FriendCard from './components/FriendCard';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
      {this.state.friends.map((friend) => <FriendCard key={friend.id} friend={friend} />)}
      </div>
    );
  }
}

export default App;
