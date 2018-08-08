import React from 'react';

const FriendList = ({ friends }) => (
  <div>
    <h1>Your Friends</h1>
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
