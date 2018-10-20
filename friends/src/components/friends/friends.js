import React from 'react';

import Friend from './friend';

const Friends = props => (
  <ul>
    {props.friends.map(friend => (
      <Friend key={friend.id} friend={friend} deleteFriend={props.deleteFriend} />
    ))}
  </ul>
);

export default Friends;
