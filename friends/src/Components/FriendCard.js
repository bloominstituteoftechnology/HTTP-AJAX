import React from 'react';

const FriendCard = ({friend, deleteFriend}) => {
  // console.log(friends[0].name)
  return (
    <div className='friend-card'>
      <div>Name: {friend.name}</div>
      <div>Age: {friend.age}</div>
      <div>Email: {friend.email}</div>
      <button onClick={() => deleteFriend(friend.id)} 
      className={'delete'}>DELETE</button>
      <button onClick={() => deleteFriend(friend.id)} 
      className={'delete'}>UPDATE</button>
    </div>
  );
}

export default FriendCard;