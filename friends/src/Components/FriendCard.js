import React from 'react';

const FriendCard = ({friend}) => {
  // console.log(friends[0].name)
  return (
    <div className='friend-card'>
      <div>Name: {friend.name}</div>
      <div>Age: {friend.age}</div>
      <div>Email: {friend.email}</div>
    </div>
  );
}

export default FriendCard;