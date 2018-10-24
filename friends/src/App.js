import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './components/FriendsList';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: {}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/')
    .then((friends) => {
      this.setState({
        friends: friends.data,
      })
    })
  }

  render() {
    if (!this.state.friends.length) {
      return <h1>Loading...</h1>
    }
    else {
    return (
      <div className="App">
          <div>
            <FriendsList friends={this.state.friends} />
          </div>
      </div>
    );
    }
  }
}

export default App;
