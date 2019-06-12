import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  console.log(props.friends);
  return (
    <div className="friends-container">
      {props.friends.map(friend => {
        return <Friend friends={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
