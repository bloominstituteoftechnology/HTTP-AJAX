import React from "react";

const FriendsList = props => {
  return (
    <div className="friend-container">
      {props.friends.map(friend => (
        <div className="friend-card">
          <h2>{friend.name}</h2>
          <p>{friend.id}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
