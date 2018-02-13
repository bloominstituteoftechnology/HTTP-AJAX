import React, { Component } from 'react';
import AddFriend from "./AddFriend.js";
import axios from 'axios';

import "./FriendsList.css";

class FriendsList extends Component {
  nextId = 8;
  state = {
    friends: [],
    loading: true,
    noData: true,
  };

  componentDidMount() {
    this.getFriends();
  }

  getNextId = () => {
    return this.nextId++;
  };

  getFriends = () => {
    this.setState({ loading: true });
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data, loading: false });
    })
    .catch(error => {
      this.setState({ loading: false });
      console.log('Error: ', error);
    });
  }

  removeFriend = id => {
    axios
    .delete('http://localhost:5000/friends/' + id)
    .then(response => {
      console.log(response);
      this.getFriends();
    })
  }

  render() {
    return (
      <div>
        <AddFriend updateFriends={this.getFriends}/>
      <div>
        <div className="friend-title">Friends</div>
        {this.state.loading && <div>Loading Friends...</div>}

        {!this.state.loading && (
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
                <button onClick={() => {this.removeFriend(friend.id);}}>Delete</button>
              </li>
            );
          })}
        </ul>
        )}
      </div>
    </div>
    );
  }
}

export default FriendsList;
