import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FriendCard from './FriendCard';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="friend-list">
        {this.state.friends.map(friend => (
          <FriendDetails key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

function FriendDetails({ friend }) {
  return (
  <Link to={`/components/${friend.id}`}>
    <FriendCard friend={friend} />
  </Link>
  );
}