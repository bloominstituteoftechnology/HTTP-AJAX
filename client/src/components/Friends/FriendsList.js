import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, updateFriends }) => {
  return (
    <div>
      <h3>These are your friends</h3>
      <hr />
      {friends.map(friend => (
        <Friend updateFriends={updateFriends} key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
