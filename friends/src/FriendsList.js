import React, { Component } from "react";


const FriendsList = props => {
  return (
    <div>
      {props.friendProp.friends.map(friend => {
        return (
          <div className="cards">
            <div>Name:{friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email:{friend.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
