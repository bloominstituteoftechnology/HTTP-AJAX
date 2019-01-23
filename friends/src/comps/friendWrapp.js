import React from 'react';
import Friend from './friend.js';

const FriendWrapp = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Friend
            {...props}
            name={friend.name}
            age={friend.age}
            email={friend.email}
            key={friend.id}
            id={friend.id}
          />
        );
      })}
    </div>
  );
};

export default FriendWrapp;
