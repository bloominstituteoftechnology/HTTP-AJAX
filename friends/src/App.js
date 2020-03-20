import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

import './App.css';

class App extends Component {
  state = {
    friends: [],
  };



  render() {
    return (
      <div className="App">
        <FriendForm onCreate={this.loadFriend} />
        <Friends 
          friends={this.state.friends} 
          onDelete={this.removeFriend} />
      </div>
    );
  }

  componentDidMount() {
    this.loadFriend();
  }

  loadFriend = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState( {friends: response.data,} );
      })
      .catch(() => { console.error('error getting data'); });
  };

  removeFriend = id => {
    console.log(id);
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
