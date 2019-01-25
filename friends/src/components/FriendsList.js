import React from 'react';
import Friend from './Friend';
import FriendCard from './FriendCard';

import { Link } from 'react-router-dom';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <Link to={`/friends/${friend.id}`} key={friend.id}>
          <FriendCard friend={friend} />
        </Link>
      ))}
    </div>
  )
}

export default FriendsList;