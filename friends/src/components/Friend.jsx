import React from 'react';

const Friend = props => {
  const id = props.match.params.id;
  const friend = props.friends.find(friend => `${friend.id}` === id);
  return (
    <div className='friend-card' key={friend.id}>
      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};

export default Friend;
