import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import FriendList from './FriendList';
import FriendForm from './FriendForm';

class App extends Component {
  state = {
    friends: [],
  };

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HTTP-AJAX-REACT-WEEK6</h1>
        </header>
        <p className="App-intro">{/* To get started, edit <code>src/App.js</code> and save to reload. */}</p>
        <FriendForm onCreate={this.loadFriends} />
        <FriendList 
          friends={this.state.friends} 
          onDelete={this.removeFriend} />
      </div>
    );
  }

  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState( {friends: response.data,} );
      })
      .catch(() => { console.error('error getting data'); });
  };

  removeFriend = id => {
    const endpoint = `http://localhost:5000/friends/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        console.log('response from delete', response);
        this.setState({ friends: response.data });
      })
      .catch(() => {
        console.error('error deleting');
      });
  };
}

export default App;
