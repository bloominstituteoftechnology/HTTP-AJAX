import React from 'react';

import Friend from './friend';

const Friends = props => (
  <ul>
    {props.friends.map((friend, index) => (
      <Friend key={friend.id} friend={friend} index={index} deleteFriend={props.deleteFriend} />
    ))}
  </ul>
);

export default Friends;
