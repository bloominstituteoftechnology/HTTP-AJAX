import React, {Fragment} from 'react';
import Friend from './Friend';
 const FriendList = props => {
    return (
      <div>
      {props.friend.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
      </div>
    );
  };
  
  export default FriendList;