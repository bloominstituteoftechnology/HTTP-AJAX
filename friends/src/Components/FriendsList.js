import React from "react";
import { Route } from "react-router-dom";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => {
        return <Friend key={friend.id} {...friend} />;
      })}
    </div>
  );
};

export default FriendsList;
