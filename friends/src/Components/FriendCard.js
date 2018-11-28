import React from "react";

const FriendCard = props => {
  const friend = props.data.filter(
    friend => friend.id.toString() === props.match.params.id
  )[0];

  return (
    <div className="friend-card">
      <h1>{friend.name}</h1>
      <h2>{friend.age}</h2>
      <h2>{friend.email}</h2>
    </div>
  );
};

export default FriendCard;
