import React from 'react';

const FriendList = (props) => {
  return (
    <div className='friend-card'>
      <div className='friend-content'>
        <h3>{props.friend.name}</h3>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
      </div>
    </div>
    );
 }

export default FriendList;
