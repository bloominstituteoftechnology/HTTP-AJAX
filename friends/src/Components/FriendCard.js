import React from 'react';

const FriendCard = ({friend, deleteFriend, history}) => {
  const button = deleteFriend ?  <button onClick={(e) => {
    deleteFriend(e,friend.id);
    history.push('/');
  }} 
  className={'delete'}>DELETE</button> : null

  return (
    <div className='friend-card'>
      <div>Name: {friend.name}</div>
      <div>Age: {friend.age}</div>
      <div>Email: {friend.email}</div>
      {button}
      {/* <button onClick={(e) => deleteFriend(e,friend.id)} 
      className={'delete'}>DELETE</button>
      <button onClick={() => deleteFriend(friend.id)} 
      className={'delete'}>UPDATE</button> */}
    </div>
  );
}

export default FriendCard;