import React from 'react';

import Friend from './Friend.js';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
          />
        )
      })}
    </div>
  );
}

export default FriendsList;
