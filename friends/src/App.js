import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
  };

  render() {
    return (
      <div className="app">
        <FriendForm onCreate={this.loadFriends} />
        <FriendsList friends={this.state.friends} onDelete={this.removeFriend} />
      </div>
    );
  }

  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      const friends = response.data;
      this.setState({friends: friends});
    })

    .catch((error) => {
      console.log('there was an error', error);
    });

  }

  removeFriend = (id) => {
    const endpoint = `http://localhost:5000/friends/${id}`;
    axios.delete(endpoint)
    .then((response) => {
      console.log('response from delete', response)
      this.setState({ friends: response.data });
    })
    .catch(() => {
      console.error('error deleteing')
    });
  }


}

export default App;
