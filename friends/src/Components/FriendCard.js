import React from "react";

const FriendCard = props => {
  const friend = props.data.find(
    friend => friend.id.toString() === props.match.params.id
  );

  return (
    <div className="friend-card">
      <div className="friend-title">
        <h1>Friend Info:</h1>
      </div>
      <div className="friend-info">
        <h2>Name: {friend.name}</h2>
        <h2>Age: {friend.age}</h2>
        <h2>Email: {friend.email}</h2>
      </div>
    </div>
  );
};

export default FriendCard;
