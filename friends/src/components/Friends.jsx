import React from 'react';
import Friend from './Friend';

const Friends = (props) => {
  return (
    <div>
      {props.friends.map((friend) => {
        return <Friend key={friend.id} friend={friend} delete={props.delete} />;
       

      })}
    </div>
  );
};

export default Friends;
