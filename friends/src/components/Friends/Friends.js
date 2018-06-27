import React from "react";
import Friend from "./Friend";

const Friends = props => {
  return (
    <div>
      {props.data.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default Friends;
