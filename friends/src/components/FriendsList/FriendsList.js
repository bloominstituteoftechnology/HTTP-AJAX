import React, { Component } from 'react';
import Friend from '../Friend/Friend.js';
import './FriendsList.css';

class FriendsList extends Component {

  render = () => {
    return (
      <ul className="friends__list">
        {this.props.friends.map((friend, i) => {
          return (
            <Friend
              key={friend.id}
              index={i}
              friend={friend}
              deleteFriend={this.props.deleteFriend}
            />
          );
        })}
      </ul>
    );
  };
}

export default FriendsList;
