import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }));
  }

  render() {
    const { friends } = this.state;
    return (
      <div className="App">
        <NewFriend />
        <FriendsList friends={friends} />
      </div>
    );
  }
}

export default App;
