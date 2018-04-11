import React, { Component } from 'react';
import axios from 'axios';
import FriendInput from './FriendInput'

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      currentFriendId: -1
    }
  };

  componentDidMount() {
    this.refreshFriends();
  }

  refreshFriends = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  }

  selectFriend = (event) => {
    console.log(event.target.id);
    this.setState({ currentFriendId: event.target.id })
  }

  removeFriend = (event) => {
    axios.delete(`http://localhost:5000/friends/${event.target.id}`)
      .then((response) => {
        console.log(`Successfully deleted. Response: ${response}`)
        this.refreshFriends();
      })
      .catch((error) => {
        console.log(`Error deleting friend: ${error}`)
      })
  }

  clearSelection = () => {
    this.setState({ currentFriendId: -1 });
  }
  
  render() {
    return (
      <div>
        <div className="title">Friends</div>
        <FriendInput currentFriendId={this.state.currentFriendId} refreshFriends={this.refreshFriends} />
        <ul className="grid">
          <button className="clear-selection" onClick={this.clearSelection}>Clear Selection</button>
          {this.state.friends.map(friend => (
            <li key={friend.id} className="friend">
              <div className="name">{friend.name}</div>
              <div className="age">{`Age:${friend.age}`}</div>
              <div className="email">{`Email: ${friend.email}`}</div>
              <button className="select-friend" id={friend.id} onClick={this.selectFriend}>Select</button>
              <button className="remove-friend" id={friend.id} onClick={this.removeFriend}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FriendsList;