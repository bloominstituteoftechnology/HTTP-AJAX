import React from 'react';

const FriendList = ({ friends }) => (
  <div>
    {friends.map(friend => (
      <div key={friend.id}>
        <h2>{friend.name}</h2>
        <div>{friend.age}</div>
        <div>{friend.email}</div>
      </div>
    ))}
  </div>
);

export default FriendList;
