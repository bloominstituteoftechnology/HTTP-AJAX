import React from "react";
import FriendCard from "./FriendCard";

const Friend = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return <FriendCard friends={friend} />;
      })}
    </div>
  );
};

export default Friend;
