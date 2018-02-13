import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import AllFriends from './components/AllFriends/AllFriends';
import FriendForm from './components/FriendForm/FriendForm';

class App extends Component {
  state = {
    friends: [],
  };

  render() {
    return (
      <div className="App">
        <FriendForm onCreate={this.loadFriends} />
        <AllFriends friends={this.state.friends}
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
          this.setState({
            friends: response.data,
          });
        })
        .catch(() => {
          console.error('error getting data');
        });
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
