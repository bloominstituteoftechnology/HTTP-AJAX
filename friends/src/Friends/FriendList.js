import React, { Component} from 'react';
import FriendCard from './FriendCard';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	friends: []
    }
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
  const { id } = friend;
  return (
    <div className="friends">
      <FriendCard friend={friend} />
    </div>
);

    }
