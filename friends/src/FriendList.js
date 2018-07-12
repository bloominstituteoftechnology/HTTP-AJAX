// data is passed in then block as new data in each then block

import React from 'react';
import Friend from './Friend';
const FriendList = (props) => {
  return (
    <div>
      {props.friends.map((friend) => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendList;
