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
    newFriend: '',
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data, loading: false });
    })
    .catch(error => {
      this.setState({ loading:false });
      console.log('Error: ', error);
    });
  }

  getNextId = () => {
    return this.nextId++;
  };

  render() {
    return (
      <div>
        <AddFriend />
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
