import React from 'react';
import FriendDetail from './FriendDetail';

const FriendList = ({ friends, onUpdate, onDelete }) => (
  <div>
    <h1>Your Friends</h1>
    {friends.map(friend => (
      <FriendDetail
        onDelete={onDelete.bind(null, friend.id)}
        onUpdate={onUpdate.bind(null, friend.id)}
        key={friend.id}
        friend={friend}
      />
    ))}
  </div>
);

export default FriendList;
