import React, { Component } from "react";

const FriendCard = props => {
  return props.data.map(friend => (
    <div className="friend" key={friend.id}>
      <h3>{friend.name}</h3>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  ));
};

export default FriendCard;