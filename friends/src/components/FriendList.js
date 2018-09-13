import React, { Component } from 'react';
import axios from 'axios';
import FriendForm from './FriendForm';

export default class FriendList extends Component {
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
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="friend-list">
        {this.state.friends.map(friend => (
          <div key={friend.name} className="friend">
            {friend.name} | {friend.age} | {friend.email}
          </div>
        ))}
        {console.log(`Friends ${this.state.friends}`)}
      </div>
    );
  }
}
