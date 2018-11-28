import React from 'react';

const FriendCard = ({ friend }) => {
  return (
    <div className="ui list">
      <div className="ui item">Name: {friend.name}</div>
      <div className="ui item">Age: {friend.age}</div>
      <div className="ui item">Email: {friend.email}</div>
    </div>
  );
}

export default FriendCard;