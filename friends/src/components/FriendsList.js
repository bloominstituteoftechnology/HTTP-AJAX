import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './FriendsList.css';

export default class FriendsList extends Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    const stream = 'http://localhost:5000/friends';

    axios
      .get(stream)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(() => {
        console.error('unknown error');
      });
  }

  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>

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
      </div>
    );
  }
}

