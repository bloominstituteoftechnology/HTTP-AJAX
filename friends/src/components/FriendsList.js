import React from 'react';
import '../App.css';
import Friend from './Friend';

const FriendsList = props => {
  const friendsList = props.friends.slice().reverse();
  return (
    <div className="friends">
      {friendsList.map(friend => {
        return (
          <Friend key={friend.id} friend={friend} />
        )
      })}
    </div>
  );
}

export default FriendsList;
