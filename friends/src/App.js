import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './FriendsList/FriendsList';
import AddFriend from './AddFriend/AddFriend';
import './App.css';

class App extends Component {
  state = {
    friends: [],
  };
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends List</h1>
        </header>
        <FriendsList friends={this.state.friends} />
        <AddFriend />
      </div>
    );
  }
}

export default App;
