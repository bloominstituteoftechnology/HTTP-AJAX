import React from 'react';
import FriendCard from './FriendCard';
import NewFriendForm from './NewFriendForm';

import { Link } from 'react-router-dom';

const FriendsList = props => {
  return (
    <div>
      <NewFriendForm create createFriend={props.createFriend} />

      {props.friends.map(friend => (
        <div key={friend.id}>
          <Link to={`/friends/${friend.id}`}>
            <FriendCard friend={friend} />
          </Link>
          <button onClick={() => props.deleteFriend(friend.id)}>Delete</button>
        </div>
      ))}
      
    </div>
  )
}

export default FriendsList;