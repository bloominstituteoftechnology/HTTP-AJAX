import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './Friends';
import FriendForm from './FriendForm';

class App extends Component {
  state = {
    friendList: [],
  };

  render() {
    return (
      <div className="App">
        <FriendForm onCreate={this.loadFriends} />
        <Friends friendList={this.state.friendList} />
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
        this.setState({ friendList: response.data });
      })
      .catch(error => {
        console.log("ahhhhh, the error is here!:", error);
      });
  }

  deleteFriend = (id) => {
    const endpoint = `http://localhost:5000/friends/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        this.setState({ friendList: response.data});
      })
      .catch(error => {
        console.error('error', error);
      });
  };
}

export default App;
