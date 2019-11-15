import React from 'react';
import UpdateFriend from './UpdateFriend';
import DeleteFriend from './DeleteFriend';

const Friend = ({ friend, updateFriends }) => {
  return (
    <div className="friend">
      <div>Name: {friend.name}</div>
      <div>Age: {friend.age}</div>
      <div> Email: {friend.email}</div>
      <UpdateFriend updateFriends={updateFriends} friend={friend} />
      <DeleteFriend updateFriends={updateFriends} friend={friend} />
      <hr />
    </div>
  );
};

export default Friend;