import React from "react";

const FriendCard = props => {
  const friend = props.data.find(
    friend => friend.id.toString() === props.match.params.id
  );

  return (
    <div className="friend-card">
      <h1>{friend.name}</h1>
      <h2>{friend.age}</h2>
      <h2>{friend.email}</h2>
    </div>
  );
};

export default FriendCard;
