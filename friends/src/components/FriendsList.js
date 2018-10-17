import React from 'react';
import './FriendsList.css';

const FriendsList = ({ friends }) => {
  return (
    <div className="FriendList">
      {friends.map(friend => (
        <div className="card" key={friend.id}>
          <h3>{friend.name}</h3>
          <p>Age: {friend.age}</p>
          <p>email: {friend.email}</p>
          <div className="delete">X</div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
