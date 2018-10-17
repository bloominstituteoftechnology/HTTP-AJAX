import React from 'react';

const FriendsList = ({ friends }) => {
  return (
    <div>
      {friends.map(friend => (
        <div className="card" key={friend.id}>
          <h3>{friend.name}</h3>
          <p>Age: {friend.age}</p>
          <p>email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
