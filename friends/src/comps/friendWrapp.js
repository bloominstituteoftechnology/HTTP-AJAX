import React from 'react';
import Friend from './friend.js';
import './styles/friendsList.scss';

const FriendWrapp = props => {
  return (
    <div className="friendContainer">
      {props.friends.map(friend => {
        return (
          <Friend
            {...props}
            name={friend.name}
            age={friend.age}
            email={friend.email}
            key={friend.id}
            id={friend.id}
            deleteFriend={props.deleteFriend}
          />
        );
      })}
    </div>
  );
};

export default FriendWrapp;
