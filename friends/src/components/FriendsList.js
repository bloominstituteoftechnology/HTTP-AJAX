import React from 'react';

import { Route } from 'react-router-dom';

import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

const Friends = props => {
  return (
    <div>
      <h1>Friends:</h1>
      {props.friends.map(friend => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
