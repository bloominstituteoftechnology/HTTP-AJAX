import React from 'react';
import '../App.css';
import Friend from './Friend';

const FriendsList = props => {
  return (
    <div className="friends">
      {props.friends.reverse().map(friend => {
        return (
          <Friend key={friend.id} friend={friend} />
        )
      })}
    </div>
  );
}

export default FriendsList;
