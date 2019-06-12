import React from 'react';
import { Link } from 'react-router-dom';

import './FriendsList.scss';
function FriendsList(props) {
  console.log(props);
  return (
    <div className='friends-list-wrapper'>
      {props.friends.map(friend => {
        return (
          <Link
            className='friend-card'
            key={friend.id}
            to={`/friends/${friend.id}`}
          >
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default FriendsList;
