import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, updateFriends }) => {
  return (
    <div>
      {friends.map(friend => (
        <Friend updateFriends={updateFriends} key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;